import { fetchStoryBySlug } from "@/lib/api";
import { StoryblokComponent } from "@storyblok/react/rsc";

export default async function Page() {
  const { data } = await fetchStoryBySlug('home');
  return (
      <StoryblokComponent blok={data.story.content} />
  );
}
