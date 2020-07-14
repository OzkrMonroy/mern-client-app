import React, { useReducer } from 'react'
import TasksReducer from './tasksReducer'
import TasksContext from './tasksContext'
import { GET_TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, SET_TASK_SELECTED, UPDATE_TASK } from '../../types'
import axiosClient from '../../config/axios'

const TasksState = (props) => {

  const initialState = {
    tasksProject: [],
    taskSelected: null,
    showError: false
  }

  const [state, dispatch] = useReducer(TasksReducer, initialState)

  const getTasksFromApi = async taskProject => {
    try {
      const response = await axiosClient.get('/api/tasks', {params: { taskProject }})
      dispatch({
        type: GET_TASKS_PROJECT,
        payload: response.data.tasks
      })
    } catch (error) {
      console.log(error);
    }
  }
  const addTask = async task => {
    try {
      const response = await axiosClient.post('/api/tasks', task)
      dispatch({
        type: ADD_TASK,
        payload: response.data.task
      })
    } catch (error) {
      console.log(error);
    }
  }
  const setErrorTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }
  const deleteTask = async (taskId, taskProject) => {
    try {
      await axiosClient.delete(`/api/tasks/${taskId}`, { params: { taskProject }})
      dispatch({
        type: DELETE_TASK,
        payload: taskId
      })
    } catch (error) {
      console.log(error);
    }
  }
  const setTaskSelected = task => {
    dispatch({
      type: SET_TASK_SELECTED,
      payload: task
    })
  }
  const updateTask = async task => {
    try {
      const response = await axiosClient.put(`/api/tasks/${task._id}`, task)
      dispatch({
        type: UPDATE_TASK,
        payload: response.data.task
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TasksContext.Provider value={{
      tasks: state.tasks,
      tasksProject: state.tasksProject,
      taskSelected: state.taskSelected,
      showError: state.showError,
      getTasksFromApi,
      addTask,
      deleteTask,
      updateTask,
      setErrorTask,
      setTaskSelected
    }}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksState