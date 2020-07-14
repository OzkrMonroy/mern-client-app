import React, { useReducer } from "react";
import ProjectsContext from "./projectsContext";
import ProjectReducer from "./projectReducer";
import {
  SHOW_PROJECT_FORM,
  GET_PROJECTS_LIST,
  ADD_PROJECT,
  FORM_VALIDATE,
  SET_SELECTED_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";
import axiosClient from "../../config/axios";

const ProjectState = (props) => {
  const initialState = {
    showForm: false,
    showError: false,
    projectsList: [],
    selectedProject: null,
    messageError: null,
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const setShowForm = () => {
    dispatch({
      type: SHOW_PROJECT_FORM,
    });
  };
  const setShowError = () => {
    dispatch({
      type: FORM_VALIDATE,
    });
  };
  const getProjectsFromApi = async () => {
    try {
      const response = await axiosClient.get("/api/projects");
      dispatch({
        type: GET_PROJECTS_LIST,
        payload: response.data.projectsList,
      });
    } catch (error) {
      const alert = {
        message: 'Ocurrión un error',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  };
  const addProjectToList = async (project) => {
    try {
      const response = await axiosClient.post("/api/projects", project);
      dispatch({
        type: ADD_PROJECT,
        payload: response.data,
      });
    } catch (error) {
      const alert = {
        message: 'Ocurrión un error',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  };
  const setSelectedProject = (projectId) => {
    dispatch({
      type: SET_SELECTED_PROJECT,
      payload: projectId,
    });
  };
  const deleteSelectedProject = async (projectId) => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = {
        message: 'Ocurrión un error',
        category: 'alerta-error'
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        showForm: state.showForm,
        showError: state.showError,
        projectsList: state.projectsList,
        selectedProject: state.selectedProject,
        messageError: state.messageError,
        setShowForm,
        setShowError,
        getProjectsFromApi,
        addProjectToList,
        setSelectedProject,
        deleteSelectedProject,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectState;
