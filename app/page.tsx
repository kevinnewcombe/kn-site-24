import { fetchStoryBySlug } from "@/lib/api";
import { StoryblokComponent } from "@storyblok/react/rsc";
import { notFound } from 'next/navigation';
import PageSection from "@/components/atoms/pagesection/PageSection";
import ContactForm from "@/components/organisms/contactform/ContactForm";
export default async function Page() {
  const { data } = await fetchStoryBySlug('home');
  if(data.error){
    notFound();
  }
  return (
      <>
        <StoryblokComponent blok={data.story.content} />
        <PageSection>
          <ContactForm />
        </PageSection>
      </>
  );
}

