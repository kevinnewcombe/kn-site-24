
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { ReactNode } from 'react';
import DateComponent from '@/components/atoms/date/Date'
import './post.scss'
import Link from "next/link";
import { PostProps } from "@/lib/types/storyblok-component-types";

/**
 * A full blog post
 */
export const Post: React.FC<{title:string, date:string, children:ReactNode, editURL:string}>= ({title, date, children, editURL}) => {
  return (
    <article className="post">
      <div className="post__headline">
        <h1>{title}</h1>
        { process.env.NODE_ENV === 'development' && <Link href={editURL}>Edit this page</Link> }
        <DateComponent dateString={ date } textFormat="LLLL d, yyyy" />
      </div>
      { children }
    </article>
  );
}
export default Post;

export const PostStoryblok: React.FC<{blok:PostProps}>= ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok:any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
  );
}
