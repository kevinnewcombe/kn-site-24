import './teaser.scss'
import { storyblokEditable } from "@storyblok/react/rsc";
/**
 * Teaser description goes here
 */

const Teaser: React.FC<{blok:any}>= ({blok}) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
}

export default Teaser;
