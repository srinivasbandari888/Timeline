// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {title, description, projectTitle, imageUrl, duration, projectUrl} =
    projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="img" />
      <div>
        <h1 className="project-heading">{title}</h1>
        <AiFillCalendar color="#171f46" />
        <p className="time-duration">{duration}</p>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
