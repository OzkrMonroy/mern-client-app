import React, { useState, useContext } from "react";
import ProjectsContext from '../../context/proyectos/projectsContext';

const FormTask = () => {
  const projectsContext = useContext(ProjectsContext)
  const {selectedProject} = projectsContext
  const [taskData, setTaskData] = useState({
    taskName: ''
  })

  const handleOnChange = e => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    })
  }
  if(!selectedProject) return null

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea..."
            name="taskName"
            onChange={handleOnChange}
            value={taskData.taskName}
          />
        </div>
        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-block btn-submit" value="Agregar tarea"/>
        </div>
      </form>
    </div>
  );
};

export default FormTask;
