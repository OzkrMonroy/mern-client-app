import { SHOW_PROJECT_FORM } from "../../types";


export default (state, action) => {
  switch (action.type) {
    case SHOW_PROJECT_FORM:
      return {
        ...state,
        showForm: true
      }
    default:
      return state
  }
}