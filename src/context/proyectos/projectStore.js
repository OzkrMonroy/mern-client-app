import React, { useReducer } from "react";
import ProjectsContext from "./projectsContext";
import ProjectReducer from "./projectReducer";
import { SHOW_PROJECT_FORM } from "../../types";

const ProjectState = (props) => {
  const initialState = {
    showForm: false,
    projectsList: [
      { projectName: "Proyecto 1", id: "1" },
      { projectName: "Proyecto 2", id: "2" },
      { projectName: "Proyecto 3", id: "3" },
    ],
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const setShowForm = () => {
    dispatch({
      type: SHOW_PROJECT_FORM,
    });
  };

  return (
    <ProjectsContext.Provider
      value={{
        showForm: state.showForm,
        projectsList: state.projectsList,
        setShowForm,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectState;
