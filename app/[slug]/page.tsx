import { fetchStoryBySlug } from "@/lib/api";
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
    version: "draft",
  });

  let paths = [];
  
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
