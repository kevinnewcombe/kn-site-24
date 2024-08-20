import ContactForm from "@/components/organisms/contactform/ContactForm";
export default function ContactPage() {

  return (
    <ContactForm />
  );
}

export async function generateMetadata() {
  return {
    title: "Contact Page"
  }
}
