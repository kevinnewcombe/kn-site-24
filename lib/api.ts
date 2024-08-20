import { getStoryblokApi } from "@storyblok/react/rsc";
export type pageVersionProps = "published" | "draft";

const storyblokApi = getStoryblokApi();

export async function fetchStoryBySlug(slug:string) {
  try{
    const version = process.env.storyblokPageVersion as pageVersionProps;
    const result = await storyblokApi.get(`cdn/stories/${slug}`, { version });
    return result;
  } catch( err ){
    return { data: { error: err }};
  }
}
  

export async function getAllPosts(){
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: process.env.storyblokPageVersion as pageVersionProps,
    starts_with: "posts/",
    is_startpage: false,
  });

  return data;
}

