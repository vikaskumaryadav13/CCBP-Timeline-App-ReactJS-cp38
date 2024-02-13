// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="app-container">
      <h1 className="app-heading-1">
        MY JOURNEY OF <br /> <br />
        <span className="app-heading-2">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={eachItem.id}
                  timelineDetails={eachItem}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={eachItem.id}
                timelineDetails={eachItem}
              />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
