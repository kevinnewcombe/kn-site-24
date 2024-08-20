import './pagesection.scss'
import { ReactNode } from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { PageSectionProps } from '@/lib/types/storyblok-component-types';
/**
 * Component for grouping high-level blocks on a page (example: an h2 and a card component)
 */

const PageSection: React.FC<{children:ReactNode}>= ({children}) => {
  return (
    <section className="pagesection">
      { children }
    </section>
  );
}

export default PageSection;

export const PageSectionStoryblok: React.FC<{blok:PageSectionProps}>= ({blok}) => {
  return (

    <PageSection>
      <div {...storyblokEditable(blok)}>
      {blok.blocks.map((nestedBlok:any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      </div>
    </PageSection>
  );
}
