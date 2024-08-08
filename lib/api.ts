import { getStoryblokApi } from "@storyblok/react/rsc";
export async function fetchStoryBySlug(slug:string) {
  const storyblokApi = getStoryblokApi();
  try{
    const version = process.env.storyblokPageVersion as "published" | "draft" | undefined;
    const result = await storyblokApi.get(`cdn/stories/${slug}`, { version });
    return result;
  } catch( err ){
    return { data: { error: err }};
  }
}
