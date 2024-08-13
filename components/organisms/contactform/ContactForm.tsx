"use client";
import { useState } from 'react';
import type { FormEvent } from "react";
import { contactUsAction } from '@/lib/utils/contact';
import { getCaptchaToken } from "@/lib/utils/captcha";

/**
 * Contact Form
 */
const ContactForm: React.FC<{}>= ({}) => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [userFeedback, setUserFeedback] = useState<{success:boolean,message:string}|null>(null);
  async function handleSubmit(e: FormEvent){
    setIsSending(true);
    setUserFeedback(null);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const loadingToast = toast.loading("Sending message...");
    const token = await getCaptchaToken();
    const res = await contactUsAction(token, formData);
    toast.dismiss(loadingToast);
    setIsSending(false);
    setUserFeedback(res);
    if(res.success){
      form.reset();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      { userFeedback && userFeedback.success == false && !isSending ? <strong className={`error-text`}>{ userFeedback.message }</strong> : ''}
      <fieldset disabled={ isSending }>
        <label>
          <span className="labeltext">Name</span>
          <input type="text" id="name" name="name" required />
        </label>

        <label>
          <span className="labeltext">Email</span>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </label>

        <label>
          <span className="labeltext">Message</span>
          <textarea
            id="message"
            name="message"
            required
          />
        </label>
        <input type="submit" value={ userFeedback?.success ? 'Sent!' : isSending ? `Sending...` : `Send it!` } />
      </fieldset>
    </form>
  );
}

export default ContactForm;
