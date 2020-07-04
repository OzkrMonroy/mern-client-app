import React, { useReducer } from "react";
import ProjectsContext from "./projectsContext";
import ProjectReducer from "./projectReducer";
import { SHOW_PROJECT_FORM, GET_PROJECTS_LIST } from "../../types";

const ProjectState = (props) => {
  const projectsFromApi = [
    { projectName: "Proyecto 1", id: "1" },
    { projectName: "Proyecto 2", id: "2" },
    { projectName: "Proyecto 3", id: "3" },
  ]
  
  const initialState = {
    showForm: false,
    projectsList: [],
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const setShowForm = () => {
    dispatch({
      type: SHOW_PROJECT_FORM,
    });
  };

  const getProjectsFromApi = () => {
    dispatch({
      type: GET_PROJECTS_LIST,
      payload: projectsFromApi
    })
  }

  return (
    <ProjectsContext.Provider
      value={{
        showForm: state.showForm,
        projectsList: state.projectsList,
        setShowForm,
        getProjectsFromApi
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectState;
