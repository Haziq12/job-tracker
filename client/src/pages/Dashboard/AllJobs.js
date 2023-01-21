import { useAppContext } from '../../context/appContext'
import { SearchContainer, JobsContainer } from '../../components/'

const AllJobs = () => {
  const { getJobs } = useAppContext()
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  )
}

export default AllJobs