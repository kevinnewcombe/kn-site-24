import { ReactNode } from 'react';
import './pageintro.scss'

/**
 * An introduction section for pages
 */

const PageIntro: React.FC<{title:string, children:ReactNode}>= ({title, children}) => {
  return (
    <div className="pageintro">
      <h1 className="pageintro__title">{ title }</h1>
      { children }
    </div>
  );
}

export default PageIntro;
