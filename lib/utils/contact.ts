"use server"

import { verifyCaptchaToken } from "@/lib/utils/captcha"
const postmark = require("postmark");
const postmarkClient = new postmark.ServerClient(process.env.postmarkServerToken as string);

export async function contactUsAction(token:string | null, formData:FormData){
  if(!token){
    return {
      success: false,
      message: "Token not found"
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

  if(!formData){
    return {
      success: false,
      message: 'Fill out the form'
    }
  }
  // do something with the formData
  console.log(`name: ${formData.get('name')}`);
  
  return  await sendEmail(formData.get('name') as string, formData.get('name') as string, formData.get('message') as string);
  return {
    success: true,
    message: 'Message sent!'
  }
}


async function sendEmail(name:string, email:string, message:string) {

  const HtmlBody = `
    <html><body>
    <p>The following has just been submitted on kevin-newcombe.com/contact</p>

    <p>From: <a href="mailto:${email}">${name}</a>\n\n
      ${  message.replace(/<[^>]+>/g, '') }
    </p>
    </body></html>
  `;
  const emailData = {
    From: 'kevin@kevin-newcombe.com',
    To: 'kevin@kevin-newcombe.com',
    Subject: 'Form submission from kevin-newcombe.com/contact',
    HtmlBody,
  };

  try {
    await postmarkClient.sendEmail(emailData);
    console.log('Email sent successfully!');
    return {
      success: true,
      message: 'Message sent!'
    }
  } catch (error) {
    return {
      success: false,
      message: error
    }
  }
}
