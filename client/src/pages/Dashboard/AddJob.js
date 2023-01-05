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
      <form onSubmit={handleSubmit}>

      </form>
    </Wrapper>

  )
}

export default AddJob