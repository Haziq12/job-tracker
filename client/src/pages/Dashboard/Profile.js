import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } = useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Update user')
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow 
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
            >
          </FormRow>
        </div>
      </form>
    </Wrapper>

  )
}

export default Profile