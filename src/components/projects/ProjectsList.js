import React, { useContext } from 'react'
import Project from './Project'
import ProjectsContext from '../../context/proyectos/projectsContext';

const ProjectsList = () => {
  const projectsContext = useContext(ProjectsContext)
  const { projectsList } = projectsContext

  if(projectsList.length === 0) return null

  return (
    <ul className="listado-proyectos">
      {projectsList.map(project => (
        <Project project={project} key={project.id}/>
      ))}
    </ul>
  );
}
 
export default ProjectsList;