import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Toolbar from '../layout/Toolbar';
import FormTask from '../tasks/FormTask';
import TasksList from '../tasks/TasksList';
import AuthContext from '../../context/authentication/authContext';

const Projects = () => {
  const authContext = useContext(AuthContext)
  const { getUserAuthenticatedData, user, signOut } = authContext

  useEffect(() =>{
    getUserAuthenticatedData()
  }, [])

  return (
    <div className="contenedor-app">
      <Sidebar/>
      <div className="seccion-principal">
        <Toolbar user={user} signOut={signOut}/>
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