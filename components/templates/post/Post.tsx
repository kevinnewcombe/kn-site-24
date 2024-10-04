
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { ReactNode } from 'react';
import DateComponent from '@/components/atoms/date/Date'
import './post.scss'
import Link from "next/link";
import { PostProps } from "@/lib/types/storyblok-component-types";

/**
 * A full blog post
 */

const checkAreSameDay = (a:string, b:string) =>{
  const aDate = new Date(a);
  const bDate = new Date(b);
  return aDate.getFullYear() === bDate.getFullYear() && aDate.getMonth() === bDate.getMonth() && aDate.getDate() === bDate.getDate()
}
export const Post: React.FC<{title:string, created_at:string, last_modified:string|null, children:ReactNode, editURL:string}>= ({title, created_at, last_modified, children, editURL}) => {
  let last_modified_block = <></>
  if(last_modified){
    if(!checkAreSameDay(last_modified,  created_at)){
      last_modified_block = (
        <>
          <br />
          <span className="post__dateprefix">Last Modified:</span> <DateComponent dateString={last_modified} textFormat="LLLL d, yyyy" />
        </>
      );
    }
  }
  return (
    <article className="post">
      <div className="post__headline">
        <h1>{title}</h1>
        { process.env.NODE_ENV === 'development' && <><Link href={editURL}>Edit this page</Link><br /></> }
          <span className="post__dateprefix">Posted:</span> <DateComponent dateString={ created_at } textFormat="LLLL d, yyyy" />
        { last_modified_block }
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
