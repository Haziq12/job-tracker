import Wrapper from '../assets/wrappers/JobsContainer'
import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Job from './Job'

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext()
  return (
    <Wrapper>
      JobsContainer
    </Wrapper>
  )
}

export default JobsContainer