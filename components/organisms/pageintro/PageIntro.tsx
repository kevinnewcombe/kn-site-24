import { ReactNode } from 'react';
import './pageintro.scss'
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';
import { PageIntroProps } from '@/lib/types/storyblok-component-types';
/**
 * An introduction section for pages
 */

const PageIntro: React.FC<{title:string|undefined, children:ReactNode}>= ({title, children}) => {
  return (
    <div className="pageintro">
      { title && <h1 className="pageintro__title">{ title }</h1> }
      { children }
    </div>
  );
}
export default PageIntro;

export const PageIntroStoryblok: React.FC<{blok:PageIntroProps}>= ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
      <PageIntro title={blok.title}>
        {render(blok.content)}
      </PageIntro>
    </div>
  );
}
