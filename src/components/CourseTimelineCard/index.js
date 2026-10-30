// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {title, name, description, duration, tagsList} = courseDetails

  return (
    <div className="card-container">
      <div className="heading-container">
        <h1 className="heading">{title}</h1>
        <div>
          <AiFillClockCircle color="#171f46" />
          <p className="clock">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      {tagsList.map(eachTag => (
        <li className="list-item" key={eachTag.name}>
          {eachTag.name}
        </li>
      ))}
    </div>
  )
}
export default CourseTimelineCard
