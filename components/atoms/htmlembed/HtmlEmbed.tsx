import { storyblokEditable } from "@storyblok/react/rsc";
/**
 * Embed raw HTML snippets for things like CodePens.
 */

const HtmlEmbed: React.FC<{html:string}>= ({html}) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: html }}
    />
  );
}

export default HtmlEmbed;

export const HtmlEmbedStoryblok: React.FC<{blok:any}>= ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
      <HtmlEmbed html={ blok.snippet } />
    </div>
  );
}
