import React, { useContext } from 'react'
import ProjectsContext from '../../context/proyectos/projectsContext';

const Project = ({project}) => {
  const projectsContext = useContext(ProjectsContext)
  const {setSelectedProject} = projectsContext

  const handleOnClick = () => {
    setSelectedProject(project.id)
  }
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={handleOnClick}>{project.projectName}</button>
    </li>
  );
}
 
export default Project;