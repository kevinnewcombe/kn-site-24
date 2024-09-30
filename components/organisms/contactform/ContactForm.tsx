"use client";
import { useState } from 'react';
import type { FormEvent } from "react";
import { submitContactForm } from '@/lib/utils/contact';
import { getCaptchaToken } from "@/lib/utils/captcha";

/**
 * Contact Form
 */

type formStatusType = {
  state: 'idle' | 'sending' | 'success' | 'error';
  message: string | null;
}

const ContactForm: React.FC<{}>= ({}) => {
  const [formStatus, setFormStatus] = useState<formStatusType>({state: 'idle', message: null});

  async function handleSubmit(e: FormEvent){
    e.preventDefault();
    setFormStatus({state: 'sending', message: null});
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const token = await getCaptchaToken();
    const res = await submitContactForm(token, formData) as formStatusType;
    setFormStatus(res);
  }

  return (
    <div>
      {formStatus.state === "success" && <h3>{formStatus.message}</h3>}
      {formStatus.state !== "success" && (
        <form onSubmit={handleSubmit}>
          {formStatus.state === "error" && (
            <strong className={`error-text`}>{formStatus.message}</strong>
          )}
          <fieldset disabled={formStatus.state == "sending"}>
            <legend className="visually-hidden">Enter your contact info and message</legend>
            <label>
              <span className="labeltext">Name</span>
              <input type="text" id="name" name="name" autoComplete="given-name" required />
            </label>
            <label>
              <span className="labeltext">Email</span>
              <input type="email" id="email" name="email" autoComplete="email" required />
            </label>
            <label>
              <span className="labeltext">Message</span>
              <textarea id="message" name="message" autoComplete="off" required />
            </label>
            <input
              type="submit"
              value={formStatus.state === "sending" ? `Sending...` : `Send it!`}
            />
          </fieldset>
        </form>
      )}
    </div>
  );
}

export default ContactForm;

