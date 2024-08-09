"use client";

import { sendEmail } from '@/lib/email';


const handleSubmit = async (event:any) => {
  event.preventDefault();

  // Process form data and prepare email details
  const emailDetails = {
    to: 'kevin@kevin-newcombe.com',
    from: 'kevin@kevin-newcombe.com',
    subject: 'Postmark submission',
    message: '...',
  };

  try {
    await sendEmail(emailDetails);
    console.log('Email sent successfully!');
    // Perform any additional actions after successful email sending
  } catch (error) {
    console.error('Error sending email:', error);
    // Handle error case
  }
};

export default async function Page() {

  return (
    <> 
      <form onSubmit={handleSubmit}>
        <input type="submit"></input>
      </form>
      <h1>This is the contact page</h1>
    </>
  );
}

