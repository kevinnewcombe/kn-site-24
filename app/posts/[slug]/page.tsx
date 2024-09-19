import { fetchStoryBySlug, fetchAllPosts } from "@/lib/api";
import { notFound } from 'next/navigation';
import { StoryblokComponent } from "@storyblok/react/rsc";
import Post from "@/components/templates/post/Post";

import { PostStoryPreviewProps } from "@/lib/types/posts"; 

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await fetchStoryBySlug(`posts/${params.slug}`);
  if(data.error){
    notFound();
  }
  return  <Post title={ data.story.name } date={ data.story.published_at } editURL={`https://app.storyblok.com/#/me/spaces/${process.env.storyblokSpaceID}/stories/0/0/${data.story.id}`}>
      <StoryblokComponent blok={data.story.content} /></Post> 
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await fetchStoryBySlug(`posts/${params.slug}`);
  if(data.error){
    notFound();
  }
  return {
    title: `${data.story.name}`
  }
}


export async function generateStaticParams() {
  const data = await fetchAllPosts();
  let paths: { slug: string }[] = [];
  {data.stories.map((post: PostStoryPreviewProps) => { 
    paths.push({slug: post.full_slug.replace('posts/', '')});
  })}
  return paths;
}
