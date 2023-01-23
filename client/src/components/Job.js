import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import { link } from 'react-router-dom'
import JobInfo from './JobInfo'
import moment from 'moment'

const Job = ({ company, createdAt, _id, position, jobLocation, jobType, status }) => {
  const { setEditJob, deleteJob } = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
    </Wrapper>
  )
}

export default Job