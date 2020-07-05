import React, { useReducer } from 'react'
import TasksReducer from './tasksReducer'
import TasksContext from './tasksContext'
import { GET_TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, SET_TASK_STATE, SET_TASK_SELECTED, UPDATE_TASK } from '../../types'

const TasksState = (props) => {

  const initialState = {
    tasks: [
      {taskName: 'Elegir plataforma', taskState: true, id: '1', projectId: '1'},
      {taskName: 'Elegir colores', taskState: false, id: '2', projectId: '2'},
      {taskName: 'Elegir plataformas de pago', taskState: false, id: '3', projectId: '3'},
      {taskName: 'Elegir hosting', taskState: true, id: '4', projectId: '4'},
      {taskName: 'Elegir plataforma', taskState: true, id: '5', projectId: '4'},
      {taskName: 'Elegir colores', taskState: false, id: '6', projectId: '3'},
      {taskName: 'Elegir plataformas de pago', taskState: false, id: '7', projectId: '2'},
      {taskName: 'Elegir hosting', taskState: true, id: '8', projectId: '1'},
    ],
    tasksProject: null,
    taskSelected: null,
    showError: false
  }

  const [state, dispatch] = useReducer(TasksReducer, initialState)

  const getTasksFromApi = projectId => {
    dispatch({
      type: GET_TASKS_PROJECT,
      payload: projectId
    })
  }
  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }
  const setErrorTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }
  const deleteTask = taskId => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId
    })
  }
  const setTaskState = task => {
    dispatch({
      type: SET_TASK_STATE,
      payload: task
    })
  }
  const setTaskSelected = task => {
    dispatch({
      type: SET_TASK_SELECTED,
      payload: task
    })
  }
  const updateTask = task => {
    console.log(task)
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
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
      setTaskState,
      setTaskSelected
    }}>
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksState