import Wrapper from '../assets/wrappers/JobsContainer'
import { useAppContext } from '../context/appContext'
import PageBtnContainer from './PageBtnContainer'
import { useEffect } from 'react'
import Loading from './Loading'
import Job from './Job'

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs, search, searchStatus, sort, searchType, numOfPages } = useAppContext()

  useEffect(() => {
    getJobs()
  }, [page, search, searchStatus, sort, searchType])

  if (isLoading) {
    return <Loading center />
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs To Display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>{totalJobs} Job{jobs.length > 1 && 's'} Found</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return (
            <Job key={job._id} {...job} />
          )
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer