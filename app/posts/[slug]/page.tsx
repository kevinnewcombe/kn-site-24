import Link from "next/link";
import { draftMode } from "next/headers";
import DateComponent from "@/app/date";
import Post from "@/components/templates/post/Post";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPost } from "@/lib/api";



export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {

  const { isEnabled } = draftMode();
  const { post } = await getPost(params.slug, isEnabled);
  
  return {
    title: `${post.title} | Kevin Newcombe`  
  }
}



export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post } = await getPost(params.slug, isEnabled);
  return <Post title={ post.title } date={ post.date } content={ post.content }/>
}
