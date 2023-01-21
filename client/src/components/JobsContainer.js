import Wrapper from '../assets/wrappers/JobsContainer'
import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import Job from './Job'

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext()

  useEffect(() => {
    getJobs()
  }, [])

  if(isLoading) {
    return <Loading center/>
  }

  if(jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs To Display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      
    </Wrapper>
  )
}

export default JobsContainer