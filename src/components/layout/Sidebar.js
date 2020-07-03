import React from 'react';
import FormCreateProject from '../projects/FormCreateProject';

const Sidebar = () => {
  return (
    <aside>
      <h1>MERN<span>Tasks</span></h1>
      <FormCreateProject/>
      <div className="proyectos">
        <h2>Tus proyectos</h2>
      </div>
    </aside>
  );
}
 
export default Sidebar;