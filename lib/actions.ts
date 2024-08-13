// "use client";
"use server"
import { useReCaptcha } from "next-recaptcha-v3";

export async function submitContactForm(previousState: string | undefined | null,formData: FormData){
  // @ts-ignore
  const email = formData.get('email');
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
              console.log("success", res.data);
              return { message: "success!" };
            })
            .catch((err) => {
              // error
              console.log("err");
              return { message: "Error" };
            });
        }
      });
  });
};

/* 
export async function shareMeal(prevState, formData){
  function isInvalidText(text){
    return !text || text.trim() === '';
  }

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),ac
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
*/
