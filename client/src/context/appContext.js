import { useState, useReducer, useContext } from 'react'

const initialState = {
  isLoading : false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

const appContext = React.createContext()

const AppProvider = ({children}) => {
  const [state, setState] = useState(initialState)

return <appContext.Provider value={{...state}}>
  {children}
</appContext.Provider>
}

