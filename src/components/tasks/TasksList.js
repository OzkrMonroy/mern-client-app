import React, { Fragment, useContext } from 'react'
import Task from './Task';
import ProjectsContext from '../../context/proyectos/projectsContext';
import TasksContext from '../../context/tasks/tasksContext';

const TasksList = () => {
  const projectsContext = useContext(ProjectsContext)
  const tasksContext = useContext(TasksContext)
  const {selectedProject, deleteSelectedProject} = projectsContext
  const {tasksProject} = tasksContext

  if(!selectedProject) return <h2>Selecciona un proyecto</h2>

  const [currentProject] = selectedProject

  const handleOnClick = () => {
    deleteSelectedProject(currentProject.id)
  }

  return (
    <Fragment>
      <h2>Proyecto: {currentProject.projectName}</h2>
      <ul className="listado-tareas">
        {(tasksProject.length === 0)
          ? (<li className="tarea"><p>No hay tarea</p></li>)
          : tasksProject.map(task => (
              <Task key={task.id} task={task}/>
            ))
        }
      </ul>
      <button type="button" className="btn" onClick={handleOnClick}>Eliminar proyecto &times;</button>
    </Fragment>
  );
}
 
export default TasksList;