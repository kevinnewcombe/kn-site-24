import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/components/molecules/postpreview/PostPreview";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const morePosts = allPosts.slice(1);

  return (
    <>
      {morePosts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </>
  );
}
