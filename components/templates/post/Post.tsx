import './post.scss'
import DateComponent from '@/components/atoms/date/Date'
import { Markdown } from "@/lib/markdown";
interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
  width: number;
  height: number;
}

interface AssetLink {
  block: Asset[];
}

interface Content {
  json: any;
  links: {
    assets: AssetLink;
  };
}

/**
 * A full blog post
 */
export const Post: React.FC<{title:string, date:string, content:Content}>= ({title, date, content}) => {
  return (
    <article className="post">
      <div className="post__headline">
        <h1>{title}</h1>
        <DateComponent dateString={ date } textFormat="LLLLd, yyyy" />
      </div>
      <Markdown content={content} />
    </article>
  );
}

export default Post;
