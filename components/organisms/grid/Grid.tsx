import './grid.scss'
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
/**
 * Grid description goes here
 */

const Grid: React.FC<{blok:any}>= ({blok}) => {
  return (
    <div  {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok:any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}

export default Grid;
