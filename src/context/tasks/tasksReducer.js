import { GET_TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, SET_TASK_SELECTED, UPDATE_TASK } from "../../types"

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_PROJECT:
      return {
        ...state,
        tasksProject: action.payload,
        taskSelected: null
      }
    case ADD_TASK:
      return {
        ...state,
        tasksProject: [action.payload, ...state.tasksProject],
        showError: false
      }
    case VALIDATE_TASK:
      return {
        ...state,
        showError: true
      }
    case DELETE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.filter(task => task._id !== action.payload)
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.map(task => task._id === action.payload._id ? action.payload : task),
        taskSelected: null
      }
    case SET_TASK_SELECTED:
      return {
        ...state,
        taskSelected: action.payload
      }
  
    default:
      return state
  }
}