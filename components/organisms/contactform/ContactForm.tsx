"use client";
import toast from 'react-hot-toast';
import type { FormEvent } from "react";
import { contactUsAction } from '@/lib/utils/contact';
import { getCaptchaToken } from "@/lib/utils/captcha";

/**
 * ContactForm description goes here
 */

const ContactForm: React.FC<{}>= ({}) => {
  async function handleSubmit(e: FormEvent){
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);


    const loadingToast = toast.loading("Sending message...");

    const token = await getCaptchaToken();
    const res = await contactUsAction(token, formData);
    toast.dismiss(loadingToast);
    if(res.success){
      form.reset();
      toast.success(res.message);
    }else{
      toast.error(res.message);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="labeltext">Name</span>
        <input type="text" id="name" name="name" defaultValue="John Doe" />
      </label>

      <label>
        <span className="labeltext">Email</span>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue="test@test.com"
        />
      </label>

      <label>
        <span className="labeltext">Message</span>
        <textarea
          id="message"
          name="message"
          defaultValue="<h1>Lorem</h1> ipsum dolor sit amet"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;
