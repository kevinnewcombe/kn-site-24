import './projectcards.scss'
import Image from 'next/image';
import DateComponent from '@/components/atoms/date/Date';
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';
/**
 * Card layout for projects
 */
export type ProjectType = {
  name: string,
  url: string,
  date: string,
  role: string,
  description: string,
  screenshot: {
    filename: string,
    alt: string,
  }
}


const ProjectCards: React.FC<{projects:ProjectType[]}>= ({projects}) => {
  return (
    <div className="projectcards">
      {projects.map((project, index) => { 
        return(
        <a href={ project.url } className="projectcards__card" key={index} >
          <span>
          <Image
            src={`${project.screenshot.filename}/m/800x0`}
            width={800}
            height={0}
            alt={project.screenshot.alt}
            sizes="373px, (min-width:1075px) calc(100vw / 3), (min-width:675px) calc(100vw / 2), calc(100vw - 20px)" 
          /> 
          </span>
            <span className="projectcards__headline">
              <h3>{project.name}</h3>
              <DateComponent dateString={project.date} textFormat="LLLL yyyy" />
              <span className="projectcards__subtitle">{project.role}</span>
            </span>
            <span className="projectcards__description">
              {render(project.description)}
            </span>
        </a>
      )})}
    </div>
  );
}

export default ProjectCards;

export const ProjectCardsStoryblok: React.FC<{blok:any}>= ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
      <ProjectCards projects={blok.projects} />
    </div>
  );
}
