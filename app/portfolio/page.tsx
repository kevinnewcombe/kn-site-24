import { draftMode } from "next/headers";
import { getAllProjects } from "@/lib/api";
import ProjectCards from "@/components/organisms/projectcard/ProjectCards";
import PageIntro from "@/components/organisms/pageintro/PageIntro";
export default async function Page() {
  const { isEnabled } = draftMode();
  const allProjects = await getAllProjects(isEnabled);
  return (
    <>
      <PageIntro title="Portfolio">
        <p>Some recent highlights.</p>
      </PageIntro>
      <ProjectCards projects={ allProjects } />
    </>
  );
}
