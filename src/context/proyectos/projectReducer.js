import { SHOW_PROJECT_FORM, GET_PROJECTS_LIST, ADD_PROJECT, FORM_VALIDATE, SET_SELECTED_PROJECT, DELETE_PROJECT } from "../../types";


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
        projectsList: action.payload
      }
    case ADD_PROJECT:
      return {
        ...state,
        projectsList: [...state.projectsList, action.payload],
        showForm: false,
        showError: false
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projectsList: state.projectsList.filter(project => project.id !== action.payload),
        selectedProject: null
      }
    case SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: state.projectsList.filter(project => project.id === action.payload)
      }
    default:
      return state
  }
}