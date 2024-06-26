import { draftMode } from "next/headers";
import { getAllProjects } from "@/lib/api";
import ProjectCards from "@/components/organisms/projectcard/ProjectCards";
import PageIntro from "@/components/organisms/pageintro/PageIntro";
export default async function Page() {
  const { isEnabled } = draftMode();
  const allProjects = await getAllProjects(isEnabled);
  return (
    <>
      <PageIntro title="👋 Hello!">
        <p>
          I'm a front-end developer obsessed with css, accessibility, and
          design systems. Interested in hearing more? Check out one of the
          links, like, anywhere else on this page (can't miss 'em.)
        </p>
      </PageIntro>

      <h2>Projects</h2>
      <ProjectCards projects={allProjects} />
    </>
  );
}
