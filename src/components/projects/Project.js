import React, { useContext } from 'react'
import ProjectsContext from '../../context/proyectos/projectsContext';
import TasksContext from '../../context/tasks/tasksContext';

const Project = ({project}) => {
  const projectsContext = useContext(ProjectsContext)
  const tasksContext = useContext(TasksContext)
  const {setSelectedProject} = projectsContext
  const {getTasksFromApi} = tasksContext
  

  const handleOnClick = () => {
    setSelectedProject(project._id)
    getTasksFromApi(project._id)
  }
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={handleOnClick}>{project.projectName}</button>
    </li>
  );
}
 
export default Project;