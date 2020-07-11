import { SHOW_ALERT, HIDE_ALERT } from "../../types"

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        showAlertMessage: action.payload
      }
    case HIDE_ALERT:
      return {
        showAlertMessage: null
      }
    default:
      return state
  }
}