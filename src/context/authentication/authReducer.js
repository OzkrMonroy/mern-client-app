import { REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_ERROR, GET_USER, LOGIN_SUCESS, SIGN_OUT } from "../../types"

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        alertMessage: null
      }
    case GET_USER: 
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        authToken: null,
        isLoading: false,
        alertMessage: action.payload
      }
    case SIGN_OUT:
      localStorage.removeItem('token')
      return {
        ...state,
        isLoading: false,
        isAuthenticated: null,
        alertMessage: null,
        authToken: null,
        user: null
      }
    default:
      return state
  }
}