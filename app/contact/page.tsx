"use client";
import { submitEmail } from '@/lib/email';
import { useFormState } from 'react-dom';



export default function Page() {
  const [state, formAction ] = useFormState(submitEmail, null);
  return (
    <>
      <form action={formAction}>
        <label>
          <span className="labeltext">Name</span>
          <input type="text" id="name" name="name" defaultValue="John Doe" />
        </label>

        <label>
          <span className="labeltext">Email</span>
          <input type="text" id="email" name="email" defaultValue="test@test.com" />
        </label>

        <label>
          <span className="labeltext">Message</span>
          <textarea id="message" name="message" defaultValue="Lorem ipsum dolor sit amet" />
        </label>
        {/* { state.message && <p>{ state.message }</p> } */}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

