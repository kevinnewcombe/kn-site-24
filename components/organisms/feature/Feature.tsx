import './feature.scss'
import { storyblokEditable } from "@storyblok/react/rsc";
/**
 * Feature description goes here
 */

const Feature: React.FC<{blok:any}>= ({blok}) => {
  return (
  <div {...storyblokEditable(blok)}>
    {blok.name}
  </div>
  );
}

export default Feature;
