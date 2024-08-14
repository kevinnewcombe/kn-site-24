"use server"
const escape = require('escape-html');
import { verifyCaptchaToken } from "@/lib/utils/captcha"
const postmark = require("postmark");
const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

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
    name, 
    email, 
    message,
    captchaData.score
  );
}


async function sendEmail(name:string, email:string, message:string, recaptchaScore:number) {

  const HtmlBody = `
    <html><body>
    <p>The following message was submitted on kevin-newcombe.com</p>

    <p>
      From: <strong>${name} (${email})</a></strong><br />
      Captcha score: <strong>${recaptchaScore}</strong>
      <hr />
      ${message.replace(/(?:\r\n|\r|\n)/g, '<br />')}
    </p>
    </body></html>
  `;
  const emailData = {
    From: process.env.CONTACT_FORM_EMAIL_ADDRESS,
    To: process.env.CONTACT_FORM_EMAIL_ADDRESS,
    Subject: 'Contact form submission from kevin-newcombe.com',
    ReplyTo: `${name} <${email}>`,
    HtmlBody,
  };

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