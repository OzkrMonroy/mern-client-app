import React, { useReducer } from "react";
import ProjectsContext from "./projectsContext";
import ProjectReducer from "./projectReducer";
import { v4 as uuidv4 } from 'uuid';
import { SHOW_PROJECT_FORM, GET_PROJECTS_LIST, ADD_PROJECT, FORM_VALIDATE, SET_SELECTED_PROJECT, DELETE_PROJECT } from "../../types";

const ProjectState = (props) => {
  const projectsFromApi = [
    { projectName: "Proyecto 1", id: "1" },
    { projectName: "Proyecto 2", id: "2" },
    { projectName: "Proyecto 3", id: "3" },
  ]
  
  const initialState = {
    showForm: false,
    showError: false,
    projectsList: [],
    selectedProject: null
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const setShowForm = () => {
    dispatch({
      type: SHOW_PROJECT_FORM,
    });
  };
  const setShowError = () => {
    dispatch({
      type: FORM_VALIDATE
    })
  }
  const getProjectsFromApi = () => {
    dispatch({
      type: GET_PROJECTS_LIST,
      payload: projectsFromApi
    })
  }
  const addProjectToList = project => {
    project.id = uuidv4()
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }
  const setSelectedProject = projectId => {
    dispatch({
      type: SET_SELECTED_PROJECT,
      payload: projectId
    })
  }
  const deleteSelectedProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return (
    <ProjectsContext.Provider
      value={{
        showForm: state.showForm,
        showError: state.showError,
        projectsList: state.projectsList,
        selectedProject: state.selectedProject,
        setShowForm,
        setShowError,
        getProjectsFromApi,
        addProjectToList,
        setSelectedProject,
        deleteSelectedProject
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectState;
