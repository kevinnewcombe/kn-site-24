import { fetchStoryBySlug, pageVersionProps } from "@/lib/api";
import { notFound } from 'next/navigation';
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react/rsc";
 
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await fetchStoryBySlug(params.slug);
  return !data.error ? <StoryblokComponent blok={data.story.content} /> : null;
}




export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // notFound();
  const { data } = await fetchStoryBySlug(params.slug);
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
  });
  let paths: { slug: string }[] = [];
 
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }
    const slug = data.links[linkKey].slug;
    if (slug === "home" || data.links[linkKey].parent_id !== null) {
      return;
    }
    
    paths.push({slug: slug});
  });

  return paths;
}
