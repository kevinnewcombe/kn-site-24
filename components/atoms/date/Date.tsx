import './date.scss'
import { format } from "date-fns";
/**
 * Formatted `time` element for displaying dates.
 */


const DateComponent: React.FC<{dateString: string, textFormat:string}>= ({dateString, textFormat}) => {
  return (
    <time className="date" dateTime={dateString}>
      {format(new Date(dateString), textFormat)}
    </time>
  );
}

export default DateComponent;
