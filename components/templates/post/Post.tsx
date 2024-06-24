import './post.scss'
import DateComponent from '@/components/atoms/date/Date'
import { Markdown } from "@/lib/markdown";
interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
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
      <h1>{title}</h1>
      <DateComponent dateString={ date} />
      <Markdown content={content} />
    </article>
  );
}

export default Post;
