import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "../date";
import CoverImage from "../cover-image";
import MoreStories from "../more-stories";

import { getAllPosts } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";


function HeroPost({
  title,
  date,
  excerpt,
  slug,
}: {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}) {
  return (
    <section>
      <Link href={`/posts/${slug}`}>
        {title}
      </Link>
      <Date dateString={date} />
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="container mx-auto px-5">
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
