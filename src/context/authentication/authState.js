import React, { useReducer } from 'react'
import authReducer from './authReducer'
import AuthContext from './authContext';

const AuthState = (props) => {
  const initialState = {
    authToken: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    alertMessage: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{
      authToken: state.authToken,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      alertMessage: state.alertMessage
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState