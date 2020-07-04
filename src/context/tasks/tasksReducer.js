import { GET_TASKS_PROJECT, ADD_TASK, VALIDATE_TASK } from "../../types"

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_PROJECT:
      return {
        ...state,
        tasksProject: state.tasks.filter(task => task.projectId === action.payload)
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        showError: false
      }
    case VALIDATE_TASK:
      return {
        ...state,
        showError: true
      }
  
    default:
      return state
  }
}