import { getStoryblokApi } from "@storyblok/react/rsc";
export type pageVersionProps = "published" | "draft";


export async function fetchStoryBySlug(slug:string) {
  const storyblokApi = getStoryblokApi();
  try{
    const version = process.env.storyblokPageVersion as pageVersionProps;
    const result = await storyblokApi.get(`cdn/stories/${slug}`, { version });
    return result;
  } catch( err ){
    return { data: { error: err }};
  }
}

export async function fetchAllPosts(){
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: process.env.storyblokPageVersion as pageVersionProps,
    starts_with: 'posts/',
    is_startpage: false
  }, {
    cache: "no-store"
  });
  return data;
}
