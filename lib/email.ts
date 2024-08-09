'use server'
const postmark = require("postmark");
const postmarkClient = new postmark.ServerClient(process.env.postmarkServerToken as string);

    
export async function sendEmail({ to, from, subject, message }: { to: string, from: string, subject: string, message: string }) {
  const emailData = {
    From: from,
    To: to,
    Subject: subject,
    HtmlBody: message,
  };

  try {
    const result = await postmarkClient.sendEmail(emailData);
    console.log('Email sent successfully!');
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

		