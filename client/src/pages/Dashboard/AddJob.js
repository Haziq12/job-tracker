import { FormRow, Alert } from '../../components/index'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {

  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useAppContext();

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(`${name} : ${value}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!position || !company || !jobLocation) {
      displayAlert()
      return 
    }
    console.log(`Job created`)
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Editing' : 'Add Job'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput} />
            <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput} />
            <FormRow
            type="text"
            labelText="Job Location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput} />
            <div className="btn-container">
              <button type="submit" className="btn btn-block submit-btn">
                Submit
              </button>
            </div>
        </div>
      </form>
    </Wrapper>

  )
}

export default AddJob