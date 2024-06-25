import './date.scss'
import { format } from "date-fns";
/**
 * Date description goes here
 */

export const DateComponent: React.FC<{dateString: string }>= ({dateString}) => {
  return (
    <time className="date" dateTime={dateString}>
      {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
}

export default DateComponent;
