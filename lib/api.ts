import { getStoryblokApi } from "@storyblok/react/rsc";
export async function fetchStoryBySlug(slug:string) {
  const storyblokApi = getStoryblokApi();
  try{
    const result = await storyblokApi.get(`cdn/stories/${slug}`, { version: "draft" });
    return result;
  } catch( err ){
    return { data: { error: err }};
  }
}
