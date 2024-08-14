import './sizecontainer.scss'
import { ReactNode } from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
type SizeProps = 250 | 300;

/**
 * Limit the max width of a container.<br />
 * The value of `size` (300, 250, etc) relates to a CSS variable named --size-container-{number}, <strong>not</strong> a pixel or rem value.
 * `size-container-300 !== 300px`
 * 
 */

const SizeContainer: React.FC<{size:SizeProps, children:ReactNode}>= ({size = 300, children}) => {
  return (
    <div className={`sizecontainer sizecontainer__${size}`}>
      { children } 
    </div>
  );
}

export default SizeContainer;


export const SizeContainerStoryblok: React.FC<{blok:any}>= ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
      <SizeContainer size={blok.size}>
      {blok.children?.map((nestedBlok:any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}   
      </SizeContainer>
    </div>
  );
}
