import { fetchStoryBySlug } from "@/lib/api";
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
    <Post title={ data.story.name } date={ data.story.published_at }>
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
    version: process.env.storyblokPageVersion as "published" | "draft" | undefined,
  });

  let paths: { slug: string }[] = [];
  
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }
    const slug = data.links[linkKey].slug;
    if (slug == "home") {
      return;
    }
    paths.push({ slug });
  });

  return paths;
}
