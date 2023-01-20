import { useAppContext } from '../../context/appContext'

const AllJobs = () => {
  const { getJobs } = useAppContext()
  return (
    <>
      <h1>All Jobs Page</h1>
      <button className='btn btn-submit' onClick={getJobs}>Get All Jobs</button>
    </>
  )
}

export default AllJobs