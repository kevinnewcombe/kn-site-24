import './date.scss'
import { format } from "date-fns";
/**
 * Date description goes here
 */

export const DateComponent: React.FC<{dateString: string, textFormat:string}>= ({dateString, textFormat = "LLLL	d, yyyy"}) => {
  return (
    <time className="date" dateTime={dateString}>
      {format(new Date(dateString), textFormat)}
    </time>
  );
}

export default DateComponent;
