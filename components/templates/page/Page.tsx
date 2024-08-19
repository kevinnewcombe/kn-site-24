import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { PageProps } from "@/lib/types/storyblok-component-types";
import './page.scss'

/**
 * Storyblok Page component
 */

const Page: React.FC<{blok:PageProps}>= ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok:any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
  );
}

export default Page;
