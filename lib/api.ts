import { getStoryblokApi } from "@storyblok/react/rsc";
export async function fetchStoryBySlug(slug:string) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, { version: "draft" });
}
