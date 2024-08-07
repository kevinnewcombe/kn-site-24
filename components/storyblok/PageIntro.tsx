import './pageintro.scss'
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';
/**
 * An introduction section for pages
 */

const SBPageIntro: React.FC<{blok:any}>= ({blok}) => {
  return (
    <div className="pageintro" {...storyblokEditable(blok)}>
      <h1 className="pageintro__title"> {blok.title}</h1>
      {render(blok.content)}
    </div>
  );
}

export default SBPageIntro;
