import { getAllProjects } from "@/lib/api";
import ProjectCards from "@/components/organisms/projectcard/ProjectCards";
import PageIntro from "@/components/organisms/pageintro/PageIntro";

import { getStoryblokApi, StoryblokComponent} from "@storyblok/react/rsc";

export default async function Page() {
  const { data } = await fetchData();
  return (
    <StoryblokComponent blok={data.story.content} />
  );
}
export async function fetchData() {
  let sbParams = { version: "draft" };
  
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"});
}
