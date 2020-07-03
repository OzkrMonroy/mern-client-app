import React, { Fragment } from 'react'
import Task from './Task';

const TasksList = () => {
  const tasksProject = [
    {taskName: 'Elegir plataforma', taskState: true, id: '1'},
    {taskName: 'Elegir colores', taskState: false, id: '2'},
    {taskName: 'Elegir plataformas de pago', taskState: false, id: '3'},
    {taskName: 'Elegir hosting', taskState: true, id: '4'},
  ]
  return (
    <Fragment>
      <h2>Proyecto Virtual</h2>
      <ul className="listado-tareas">
        {(tasksProject.length === 0)
          ? (<li className="tarea"><p>No hay tarea</p></li>)
          : tasksProject.map(task => (
              <Task key={task.id} task={task}/>
            ))
        }
      </ul>
    </Fragment>
  );
}
 
export default TasksList;