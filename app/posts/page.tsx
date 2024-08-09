import { getStoryblokApi } from "@storyblok/react/rsc";
import { PostPreview } from "@/components/molecules/postpreview/PostPreview";

interface PostStoryPreviewProps {
  name: string;
  uuid: string;
  published_at: string;
  full_slug: string;
  content: {
    description: string;
  }
}


export default async function Page() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "published",
    starts_with: 'posts/',
    is_startpage: false
  });

  return (
    <>
      {data.stories.map((post: PostStoryPreviewProps) => (
      
        <PostPreview
          key={post.uuid}
          title={post.name}
          date={post.published_at}
          slug={post.full_slug}
          excerpt={post.content.description}
        />
      ))}
    </>
  );

}
