import { fetchStoryBySlug, pageVersionProps } from "@/lib/api";
import { notFound } from 'next/navigation';
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react/rsc";

import Post from "@/components/templates/post/Post";
 
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await fetchStoryBySlug(`posts/${params.slug}`);
  return !data.error ? 
    <Post title={ data.story.name } date={ data.story.published_at } editURL={`${process.env.storyblokPreviewURLBase}${data.story.id}`}>
      <StoryblokComponent blok={data.story.content} /></Post> : null;
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
    title: data.story.name
  }
}


export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: process.env.storyblokPageVersion as pageVersionProps,
    starts_with: 'posts/',
  });

  let paths: { slug: string }[] = [];
 
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }
    const slug = data.links[linkKey].slug;
   
    paths.push({ slug: slug.replace('posts/', '') });
  });
  return paths;
}
