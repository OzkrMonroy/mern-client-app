import { SHOW_PROJECT_FORM, GET_PROJECTS_LIST } from "../../types";


export default (state, action) => {
  switch (action.type) {
    case SHOW_PROJECT_FORM:
      return {
        ...state,
        showForm: true
      }
    case GET_PROJECTS_LIST:
      return {
        ...state,
        projectsList: action.payload
      }
    default:
      return state
  }
}