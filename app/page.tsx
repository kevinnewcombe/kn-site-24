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
  // const allProjects = await getAllProjects(isEnabled);
  // return (
  //   <>
  //     <PageIntro title="👋 Hello!">
  //       <p>
  //         I'm a front-end developer obsessed with css, accessibility, and
  //         design systems. Interested in hearing more? Check out one of the
  //         links, like, anywhere else on this page (can't miss 'em.)
  //       </p>
  //     </PageIntro>

  //     <h2>Projects</h2>
  //     <ProjectCards projects={allProjects} />
  //   </>
  // );
// }
