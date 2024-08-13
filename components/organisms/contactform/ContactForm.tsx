"use client";
import toast from 'react-hot-toast';
import type { FormEvent } from "react";

/**
 * ContactForm description goes here
 */

const ContactForm: React.FC<{}>= ({}) => {
  async function handleSubmit(e: FormEvent){
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(formData.get('name'));

    const loadingToast = toast.loading("Sending message...");

    setTimeout(() => {
      form.reset();
      toast.dismiss(loadingToast);
      toast.success("Message sent!");
    }, 2000);
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
          defaultValue="Lorem ipsum dolor sit amet"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;
