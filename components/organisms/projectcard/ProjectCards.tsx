import './projectcards.scss'
import { ProjectType } from "@/lib/types";
import Image from 'next/image';
import DateComponent from '@/components/atoms/date/Date';

/**
 * Card layout for projects
 */
const ProjectCards: React.FC<{projects:ProjectType[]}>= ({projects}) => {
  return (
    <div className="projectcards">
      {projects.map((project, index) => (
        <a href={ project.url } className="projectcards__card" key={index} >
          <Image
            src={project.screenshot.url}
            alt={project.screenshot.description}
            width={project.screenshot.width}
            height={project.screenshot.height}
            sizes="373px, (min-width:1075px) calc(100vw / 3), (min-width:675px) calc(100vw / 2), calc( 100vw - 20px)" 
          />
          <span className="projectcards__content">
            <span>
              <h3>{project.name}</h3>
              <DateComponent dateString={project.date} textFormat="LLLL yyyy" />
              <span className="projectcards__subtitle">{project.role}</span>
            </span>
            <span>
              <p>{project.description}</p>
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

export default ProjectCards;
