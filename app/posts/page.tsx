import { PostPreview } from "@/components/molecules/postpreview/PostPreview";
import { notFound } from 'next/navigation';
import { fetchAllPosts } from "@/lib/api";
import { PostStoryPreviewProps } from "@/lib/types/posts";


export default async function Page() {
  const data = await fetchAllPosts();
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
  const data = await fetchAllPosts();
  if(!data.stories.length){
    notFound();
  }
  return {
    title: 'Kevin Newcombe | Posts'
  }

}
