import { SHOW_PROJECT_FORM, GET_PROJECTS_LIST, ADD_PROJECT, FORM_VALIDATE, SET_SELECTED_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from "../../types";


export default (state, action) => {
  switch (action.type) {
    case SHOW_PROJECT_FORM:
      return {
        ...state,
        showForm: true
      }
    case FORM_VALIDATE:
      return {
        ...state,
        showError: true
      }
    case GET_PROJECTS_LIST:
      return {
        ...state,
        projectsList: action.payload,
        messageError: null
      }
    case ADD_PROJECT:
      return {
        ...state,
        projectsList: [...state.projectsList, action.payload],
        showForm: false,
        showError: false,
        messageError: null
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projectsList: state.projectsList.filter(project => project._id !== action.payload),
        selectedProject: null
      }
    case SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: state.projectsList.filter(project => project._id === action.payload)
      }
    case PROJECT_ERROR:
      return {
        ...state,
        messageError: action.payload
      }
    default:
      return state
  }
}