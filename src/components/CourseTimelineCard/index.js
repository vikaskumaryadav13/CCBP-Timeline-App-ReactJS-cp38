// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {timelineDetails} = props
  const {courseTitle, description, duration, tagsList} = timelineDetails
  return (
    <div>
      <div className="card-heading-container">
        <h1 className="card-heading">{courseTitle}</h1>
        <div className="card-duration-container">
          <AiFillClockCircle className="card-icon" />
          <p className="card-duration">{duration}</p>
        </div>
      </div>
      <p className="card-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="tag-item">
            <p className="tag-name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
