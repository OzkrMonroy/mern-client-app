import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectsContext from "../../context/proyectos/projectsContext";
import TasksContext from "../../context/tasks/tasksContext";

const FormTask = () => {
  const projectsContext = useContext(ProjectsContext);
  const { selectedProject } = projectsContext;

  const tasksContext = useContext(TasksContext);
  const {taskSelected, showError, addTask, setErrorTask, getTasksFromApi, updateTask } = tasksContext;

  const [taskData, setTaskData] = useState({
    id: "",
    taskName: "",
    projectId: "",
    taskState: false
  });

  useEffect(() => {
    if(!taskSelected) return
    setTaskData(taskSelected)
  }, [taskSelected])

  if (!selectedProject) return null;

  const handleOnChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(taskData.taskName.trim() === ''){
      setErrorTask()
      return
    }

    if(taskSelected){
      console.log('Editando..')
      updateTask(taskData)
    }else{
      taskData.id = uuidv4();
      taskData.projectId = selectedProject[0].id;
  
      addTask(taskData);
    }
    
    setTaskData({
      id: "",
      taskName: "",
      projectId: "",
    });
    getTasksFromApi(selectedProject[0].id)
  };

  return (
    <div className="formulario">
      <form onSubmit={handleOnSubmit}>
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
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value={taskSelected ? "Editar tarea" : "Agregar tarea"}
          />
        </div>
      </form>
      {showError ? <p className="mensaje error">El nombre es obligatorio</p> : null}
    </div>
  );
};

export default FormTask;
