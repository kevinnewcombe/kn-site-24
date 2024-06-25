import { draftMode } from "next/headers";
import { getAllProjects } from "@/lib/api";
// import { PostPreview } from "@/components/molecules/postpreview/PostPreview";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allProjects = await getAllProjects(isEnabled);
  return (
    <>
      All the projects go here
    </>
  );
}
