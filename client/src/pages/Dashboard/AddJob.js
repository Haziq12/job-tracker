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

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>Add Job</h3>
        {showAlert && <Alert/>} 
      </form>
    </Wrapper>

  )
}

export default AddJob