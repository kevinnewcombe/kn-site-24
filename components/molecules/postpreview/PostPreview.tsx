import './postpreview.scss'
import Link from 'next/link';
import DateComponent from '@/components/atoms/date/Date';

/**
 * A preview of an individual post, for the index page
 */

export const PostPreview: React.FC<{
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}> = ({ title, date, excerpt, slug }) => {
  return (
    <p className="postpreview">
      <Link className="postpreview__name" href={slug}>
        {title}
      </Link>
      <DateComponent dateString={date} textFormat="LLLL d, yyyy" /><br />
      <span className="postpreview__excerpt">{excerpt}</span>
    </p>
  );
};

export default PostPreview;
