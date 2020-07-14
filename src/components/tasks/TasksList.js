import React, { Fragment, useContext } from 'react'
import Task from './Task';
import ProjectsContext from '../../context/proyectos/projectsContext';
import TasksContext from '../../context/tasks/tasksContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TasksList = () => {
  const projectsContext = useContext(ProjectsContext)
  const tasksContext = useContext(TasksContext)
  const {selectedProject, deleteSelectedProject} = projectsContext
  const {tasksProject} = tasksContext

  if(!selectedProject) return <h2>Selecciona un proyecto</h2>

  const [currentProject] = selectedProject

  const handleOnClick = () => {
    deleteSelectedProject(currentProject._id)
  }

  return (
    <Fragment>
      <h2>Proyecto: {currentProject.projectName}</h2>
      <ul className="listado-tareas">
        {(tasksProject.length === 0)
          ? (<li className="tarea"><p>No hay tarea</p></li>)
          : <TransitionGroup>
            {tasksProject.map(task => (
              <CSSTransition key={task._id} timeout={500} classNames="tarea">
                <Task task={task}/>
              </CSSTransition>
            ))}
          </TransitionGroup>
        }
      </ul>
      <button type="button" className="btn" onClick={handleOnClick}>Eliminar proyecto &times;</button>
    </Fragment>
  );
}
 
export default TasksList;