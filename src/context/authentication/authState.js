import React, { useReducer } from 'react'
import authReducer from './authReducer'
import AuthContext from './authContext';
import { REGISTER_ERROR, REGISTER_SUCCESS, LOGIN_ERROR, GET_USER, LOGIN_SUCESS, SIGN_OUT } from '../../types';
import axiosClient from '../../config/axios';
import AuthToken from '../../config/tokenAuth';

const AuthState = (props) => {
  const initialState = {
    authToken: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    alertMessage: null,
    isLoading: true
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loginUser = async user => {
    try {
      const response = await axiosClient.post('/api/auth', user)

      dispatch({
        type: LOGIN_SUCESS,
        payload: response.data
      })

      getUserAuthenticatedData()
    } catch (error) {
      const alert = {
        message: error.response.data.msg,
        category: 'alerta-error'
      }
      dispatch({
        type: REGISTER_ERROR,
        payload: alert
      })
    }
  }

  const registerUser = async user => {
    try {
      const response = await axiosClient.post('/api/users', user)
      
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
      })
      getUserAuthenticatedData()
    } catch (error) {
      const alert = {
        message: error.response.data.msg,
        category: 'alerta-error'
      }
      dispatch({
        type: REGISTER_ERROR,
        payload: alert
      })
    }
  }

  const signOut = () => {
    dispatch({
      type: SIGN_OUT
    })
  }

  const getUserAuthenticatedData = async () => {
    const token = localStorage.getItem('token')
    if(token){
      AuthToken(token)
    }

    try {
      const response = await axiosClient.get('/api/auth')
      dispatch({
        type: GET_USER,
        payload: response.data.user
      })
    } catch (error) {
      const alert = {
        message: error.response.data.msg,
        category: 'alerta-error'
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: alert
      })
    }
  }

  return (
    <AuthContext.Provider value={{
      authToken: state.authToken,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      alertMessage: state.alertMessage,
      isLoading: state.isLoading,
      registerUser,
      loginUser,
      getUserAuthenticatedData,
      signOut
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState