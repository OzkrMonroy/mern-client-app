import React from 'react';
import FormCreateProject from '../projects/FormCreateProject';
import ProjectsList from '../projects/ProjectsList';

const Sidebar = () => {
  return (
    <aside>
      <h1>MERN<span>Tasks</span></h1>
      <FormCreateProject/>
      <div className="proyectos">
        <h2>Tus proyectos</h2>
        <ProjectsList/>
      </div>
    </aside>
  );
}
 
export default Sidebar;