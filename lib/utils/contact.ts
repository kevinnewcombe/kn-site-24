"use server"
const escape = require('escape-html');
import { verifyCaptchaToken } from "@/lib/utils/captcha"
const postmark = require("postmark");
const postmarkClient = new postmark.ServerClient(process.env.postmarkServerToken as string);

export async function contactUsAction(token:string | null, formData:FormData){
  if(!formData){
    return {
      success: false,
      message: 'Fill out the form'
    }
  }
  const name = escape(formData.get('name') as string);
  const email = escape(formData.get('email') as string);
  const message = escape(formData.get('message') as string);
  if(!name.trim() || !email.trim() || !message.trim()){
    return {
      success: false,
      message: 'All form fields are required.'
    }
  }
  if(!token){
    return {
      success: false,
      message: "Recaptcha token not found."
    }
  }

  // verify the token
  const captchaData = await verifyCaptchaToken(token);
  if(!captchaData){
    return {
      success: false,
      message: "Captcha Failed"
    }
  }

  if(!captchaData.success || captchaData.score < 0.5){
    return {
      success: false,
      message: "Captcha Failed",
      errors: !captchaData.success ? captchaData["error-codes"] : null
    }
  }

  return await sendEmail(
    escape(formData.get('name') as string), 
    escape(formData.get('email') as string), 
    escape(formData.get('message') as string),
    captchaData.score
  );
}


async function sendEmail(name:string, email:string, message:string, recaptchaScore:number) {

  const HtmlBody = `
    <html><body>
    <p>The following message was submitted on kevin-newcombe.com/contact</p>

    <p>
      <strong>From:</strong> ${name} <a href="mailto:${email}"(${email})</a><br />
      <strong>Captcha score</strong> : ${recaptchaScore}<br /><br />
      <strong>Body</strong><br />
      ${ message }
    </p>
    </body></html>
  `;
  const emailData = {
    From: 'kevin@kevin-newcombe.com',
    To: 'kevin@kevin-newcombe.com',
    Subject: 'Form submission from kevin-newcombe.com/contact',
    ReplyTo: `${name} <${email}>`,
    HtmlBody,
  };

  return {
    success: true,
    message: 'This is a hardcoded success message. There was no attempt to call Postmark'
  }


  // Commented out so I don't spam the server/myself while working on non-postmark stuff
  try {
    await postmarkClient.sendEmail(emailData);
    return {
      success: true,
      message: 'Message sent!'
    }
  } catch (error) {
    return {
      success: false,
      message: `${error}`
    }
  }
}
