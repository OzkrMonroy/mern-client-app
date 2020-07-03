import React from 'react';
import Sidebar from '../layout/Sidebar';
import Toolbar from '../layout/Toolbar';
import FormTask from '../tasks/FormTask';
import TasksList from '../tasks/TasksList';

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar/>
      <div className="seccion-principal">
        <Toolbar/>
        <main>
          <FormTask/>
          <div className="contenedor-tareas">
            <TasksList/>
          </div>
        </main>
      </div>
    </div>
  );
}
 
export default Projects;