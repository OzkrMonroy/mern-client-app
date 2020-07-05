import { GET_TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, SET_TASK_STATE, SET_TASK_SELECTED, UPDATE_TASK } from "../../types"

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_PROJECT:
      return {
        ...state,
        tasksProject: state.tasks.filter(task => task.projectId === action.payload),
        taskSelected: null
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case UPDATE_TASK:
    case SET_TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
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