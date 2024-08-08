import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";
export async function fetchStoryBySlug(slug:string) {
  let sbParams: ISbStoriesParams = { version: "draft" };
  
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams, {cache: "no-store"});
}
