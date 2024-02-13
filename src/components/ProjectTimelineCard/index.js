// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {timelineDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    projectUrl,
    duration,
  } = timelineDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="card-heading-container">
        <h1 className="card-heading">{projectTitle}</h1>
        <div className="card-duration-container">
          <AiFillCalendar className="card-icon" />
          <p className="card-duration">{duration}</p>
        </div>
      </div>
      <p className="card-description">{description}</p>
      <a href={projectUrl} className="project-url-anchor">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
