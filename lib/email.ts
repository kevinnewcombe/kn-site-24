'use server'
const postmark = require("postmark");
const postmarkClient = new postmark.ServerClient(process.env.postmarkServerToken as string);
import axios from "axios";
    
export async function sendEmail({ to, from, subject, message }: { to: string, from: string, subject: string, message: string }) {
  return true; // for testing
 
  
 
  // const emailData = {
  //   From: from,
  //   To: to,
  //   Subject: subject,
  //   HtmlBody: message,
  // };

  // try {
  //   const result = await postmarkClient.sendEmail(emailData);
  //   console.log('Email sent successfully!');
  //   return result;
  // } catch (error) {
  //   console.error('Error sending email:', error);
  //   throw error;
  // }
}




export async function submitEmail (prevState: any, formData: FormData){
  
  /*     End of Recaptcha     */
  // Process form data and prepare email details
  console.log('submit email!');
  
  const emailDetails = {
    to: 'kevin@kevin-newcombe.com',
    from: 'kevin@kevin-newcombe.com',
    subject: 'Postmark submission',
    message: `
      <p>Name: ${formData.get('name')}</p>
      <p>Email: ${formData.get('email')}</p>
      <p>Message: ${formData.get('message')}</p>
    `,
  };

  try {
    await sendEmail(emailDetails);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    // Handle error case
  }
};
