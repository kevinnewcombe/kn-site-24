"use client";
import { submitEmail } from '@/lib/email';
import { useFormState } from 'react-dom';
import axios from "axios";
import { useReCaptcha } from "next-recaptcha-v3";

const onAddToWaitlist = () => {
  console.log('onAddToWaitlist');
  // @ts-ignore
  const email = 'kevin@kevin-newcombe.com';
  grecaptcha.ready(function () {
    // @ts-ignore
    grecaptcha
      .execute(process.env.recaptchaSiteKey as string, {
        action: "submit",
      })
      .then(function (token: string) {
        if (email) {
          axios
            .post("/api/sendmail", {
              email,
              captchaToken: token,
            })
            .then((res) => {
              // success

              console.log('success', res.data);
              // if(res.data.score <=0.9){
                // manually invoke the challenge

              // }
            })
            .catch((err) => {
              // error
              console.log('err')
            })
        }
      });
  });
};


export default function Page() {

  const [state, formAction ] = useFormState(submitEmail, null);
  return (
    <>
      <form action={onAddToWaitlist}>
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
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

