import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import './page.scss'

/**
 * Page description goes here
 */

const Page: React.FC<{blok:any}>= ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok:any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
  );
}

export default Page;
