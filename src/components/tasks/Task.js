import React, { useContext } from "react";
import ProjectsContext from '../../context/proyectos/projectsContext';
import TasksContext from "../../context/tasks/tasksContext";

const Task = ({ task }) => {
  const projectsContext = useContext(ProjectsContext);
  const { selectedProject } = projectsContext;

  const tasksContext = useContext(TasksContext)
  const {deleteTask, getTasksFromApi, updateTask, setTaskSelected} = tasksContext

  const handleDeleteTask = () => {
    deleteTask(task._id, selectedProject[0]._id)
    getTasksFromApi(selectedProject[0]._id)
  }
  const handleSetTaskState = () => {
    if(task.taskState){
      task.taskState = false
    }else {
      task.taskState = true
    }
    updateTask(task)
  }
  const handleSetTaskSelected = () => {
    setTaskSelected(task)
  }

  return (
    <li className="tarea sombra">
      <p>{task.taskName}</p>
      <div className="estado">
        {task.taskState ? (
          <button type="button" className="completo" onClick={handleSetTaskState}>
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={handleSetTaskState}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={handleSetTaskSelected}>
          Editar
        </button>
        <button type="button" className="btn btn-seundario" onClick={handleDeleteTask}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
