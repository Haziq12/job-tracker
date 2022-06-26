import React, { useReducer, useContext } from 'react'
import reducer from './reducer'
import { DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from './actions'
import axios from 'axios'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  token: null,
  userLocation: '',
  jobLocation: ''
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({
      type: DISPLAY_ALERT
    })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const addUserToLocalStorage = ({user, token, location}) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  }

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser)
      const { user, token, location } = response.data
      dispatch({ 
        type: REGISTER_USER_SUCCESS, 
        payload: { user, token, location } 
      })
    } catch (err) {
      dispatch({
        type:REGISTER_USER_ERROR, 
        payload: {msg:err.response.data.msg}
      })
    }
    clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }