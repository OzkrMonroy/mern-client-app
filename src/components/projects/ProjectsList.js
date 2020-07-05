import React, { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectsContext from '../../context/proyectos/projectsContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProjectsList = () => {
  const projectsContext = useContext(ProjectsContext)
  const { projectsList, getProjectsFromApi } = projectsContext

  useEffect(() => {
    getProjectsFromApi()
    //eslint-disable-next-line
  }, [])

  if(projectsList.length === 0) return <p>No hay proyectos, comienza creando uno.</p>

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
      {projectsList.map(project => (
        <CSSTransition key={project.id} timeout={500} classNames="proyecto">
          <Project project={project}/>
        </CSSTransition>
      ))}
      </TransitionGroup>
    </ul>
  );
}
 
export default ProjectsList;