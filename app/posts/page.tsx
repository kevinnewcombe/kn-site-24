import { getStoryblokApi } from "@storyblok/react/rsc";
import { PostPreview } from "@/components/molecules/postpreview/PostPreview";
import { getAllPosts } from "@/lib/api";
import { notFound } from 'next/navigation';
const storyblokApi = getStoryblokApi();
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
  const data = await getAllPosts();

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

export async function generateMetadata() {
  const data = await getAllPosts();
  if(!data.stories.length){
    notFound();
  }
  return {
    title: 'Kevin Newcombe | posts'
  }
}
