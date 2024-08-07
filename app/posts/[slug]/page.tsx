import Head from "next/head";
interface ISbStoriesParams { version: string; }
import { getStoryblokApi, StoryblokComponent} from "@storyblok/react/rsc";
 
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await fetchData(params.slug);
  return (
    <div>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );

}

export async function fetchData(slug:string) {
  
  let sbParams: import("@storyblok/react/rsc").ISbStoriesParams = { version: "draft" as "draft" | "published" | undefined };
  
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/posts/${slug}`, sbParams, {cache: "no-store"});
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await fetchData(params.slug);
  return {
    title: data.story.name,
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
  console.clear();
  console.log('paths', paths);
  return paths;
}

