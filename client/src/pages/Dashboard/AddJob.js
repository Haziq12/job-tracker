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

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Editing' : 'Add Job'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            tpye="text"
            name="position"
            value={position}
            onChange={handleJobInput} />
            <FormRow
            tpye="text"
            name="company"
            value={company}
            onChange={handleJobInput} />
            <FormRow
            tpye="text"
            name="jobLocation"
            value={jobLocation}
            onChange={handleJobInput} />
            
        </div>
      </form>
    </Wrapper>

  )
}

export default AddJob