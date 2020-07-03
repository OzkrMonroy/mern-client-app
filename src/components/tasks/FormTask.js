import React, { useState } from "react";

const FormTask = () => {
  const [taskData, setTaskData] = useState({
    taskName: ''
  })

  const handleOnChange = e => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    })
  }
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
