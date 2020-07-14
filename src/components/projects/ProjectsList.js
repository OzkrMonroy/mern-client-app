import React, { useContext, useEffect } from "react";
import Project from "./Project";
import ProjectsContext from "../../context/proyectos/projectsContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AlertsContext from "../../context/alerts/alertsContext";

const ProjectsList = () => {
  const projectsContext = useContext(ProjectsContext);
  const { projectsList, getProjectsFromApi, messageError } = projectsContext;

  const alertsContext = useContext(AlertsContext);
  const { showAlertMessage, showAlert } = alertsContext;

  useEffect(() => {
    if (messageError) {
      showAlert(messageError.message, messageError.category);
    }
    getProjectsFromApi();
    //eslint-disable-next-line
  }, [messageError]);

  if (projectsList.length === 0)
    return <p>No hay proyectos, comienza creando uno.</p>;

  return (
    <ul className="listado-proyectos">
      {showAlertMessage ? (
        <div className={`alerta ${showAlertMessage.category}`}>
          {showAlertMessage.message}
        </div>
      ) : null}
      <TransitionGroup>
        {projectsList.map((project) => (
          <CSSTransition key={project._id} timeout={500} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectsList;
