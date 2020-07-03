import React from 'react'
import Project from './Project'

const ProjectsList = () => {
  const projects = [
    {projectName: 'Proyecto 1', id: '1'},
    {projectName: 'Proyecto 2', id: '2'},
    {projectName: 'Proyecto 3', id: '3'}
  ]
  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project project={project} key={project.id}/>
      ))}
    </ul>
  );
}
 
export default ProjectsList;