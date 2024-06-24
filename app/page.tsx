import Link from "next/link";
import { draftMode } from "next/headers";


import Date from "./date";
import CoverImage from "./cover-image";


import { getAllPosts } from "@/lib/api";



export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      This is the homepage
    </>
  );
}
