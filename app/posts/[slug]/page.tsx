import { draftMode } from "next/headers";
import Post from "@/components/templates/post/Post";
import { getAllPosts, getPost } from "@/lib/api";



export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {

  const { isEnabled } = draftMode();
  const { post } = await getPost(params.slug, isEnabled);

  return {
    title: post.title,
    openGraph: {
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date
    }
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post } = await getPost(params.slug, isEnabled);
  return <Post title={ post.title } date={ post.date } content={ post.content }/>
}
