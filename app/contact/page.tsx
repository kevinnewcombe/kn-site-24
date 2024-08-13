"use client";
import { submitContactForm } from '@/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
// import { useFormState } from 'react-dom';
// import axios from "axios";
// // import { useReCaptcha } from "next-recaptcha-v3";

// // export default function MealsFormSubmit(){


// //   return <button disabled={ pending } type="submit">{ pending ? 'Submitting...' : 'Share Meal' }</button>
// // }


export default function ContactPage() {
  // const [state, formAction] = useFormState(addToWaitList, { message: null });
  const [state, formAction ] = useFormState(submitContactForm, { message: null });
  const { pending } = useFormStatus();
  return (
    <>
      <form action={formAction}>
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
        {state.message && <p>{state.message}</p>}
        <button disabled={pending} type="submit">
          {pending ? "Submitting..." : "Share Meal"}
        </button>
      </form>
    </>
  );
}

// "use client";
// import classes from './page.module.css';
// import ImagePicker from '@/components/meals/image-picker';
// import { shareMeal } from '@/lib/actions';
// import MealsFormSubmit from '../meals-form-submit';
// import { useFormState } from 'react-dom';

export function ShareMealPage() {
  const [state, formAction ] = useFormState(shareMeal, { message: null });
  // const status = useFormStatus();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={ formAction }>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          { state.message && <p>{ state.message }</p> }
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
