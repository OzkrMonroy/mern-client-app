import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectsContext from '../../context/proyectos/projectsContext';

const ProjectsList = () => {
  const projectsContext = useContext(ProjectsContext)
  const { projectsList, getProjectsFromApi } = projectsContext

  useEffect(() => {
    getProjectsFromApi()
  }, [])

  if(projectsList.length === 0) return <p>No hay proyectos, comienza creando uno.</p>

  return (
    <ul className="listado-proyectos">
      {projectsList.map(project => (
        <Project project={project} key={project.id}/>
      ))}
    </ul>
  );
}
 
export default ProjectsList;