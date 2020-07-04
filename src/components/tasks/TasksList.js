import React, { Fragment, useContext } from 'react'
import Task from './Task';
import ProjectsContext from '../../context/proyectos/projectsContext';

const TasksList = () => {
  const projectsContext = useContext(ProjectsContext)
  const {selectedProject, deleteSelectedProject} = projectsContext

  const tasksProject = [
    {taskName: 'Elegir plataforma', taskState: true, id: '1'},
    {taskName: 'Elegir colores', taskState: false, id: '2'},
    {taskName: 'Elegir plataformas de pago', taskState: false, id: '3'},
    {taskName: 'Elegir hosting', taskState: true, id: '4'},
  ]
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