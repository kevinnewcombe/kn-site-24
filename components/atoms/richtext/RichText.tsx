import { ReactNode } from 'react';
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';
/**
 * Simple component to render rich text from the Storyblok API
 */

const RichText: React.FC<{children:ReactNode}>= ({children}) => {
  return children;
}

export default RichText;

export const RichTextStoryblok: React.FC<{blok:any}>= ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
      <RichText>
        {render(blok.content)}
      </RichText>
    </div>
  );
}
