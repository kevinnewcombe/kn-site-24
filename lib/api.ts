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



