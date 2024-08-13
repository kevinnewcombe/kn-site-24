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





export async function shareMeal(prevState, formData){
  function isInvalidText(text){
    return !text || text.trim() === '';
  }

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  // server-side validation
  if(
      isInvalidText(meal.title) || 
      isInvalidText(meal.summary) || 
      isInvalidText(meal.instructions) || 
      isInvalidText(meal.creator) || 
      isInvalidText(meal.creator_email) || 
      !meal.creator_email.includes('@') || 
      !meal.image || meal.image.size === 0
    ){
    return {
      message: 'Invalid input.'
    }
  }

  await saveMeal(meal);
  revalidatePath('/meals'); // refresh the cache for a specific path

  redirect('/meals')
}
