import React, { Fragment, useState, useContext } from "react";
import ProjectsContext from "../../context/proyectos/projectsContext";

const FormCreateProject = () => {
  const projectContext = useContext(ProjectsContext)
  const {showForm, setShowForm} = projectContext

  const [projectData, setProjectData] = useState({
    projectName: ''
  })

  const handleOnChange = e => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    console.log(projectData)
  }
  const handleOnClick = () => {
    setShowForm()
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-primario btn-block" onClick={handleOnClick}>
        Nuevo proyecto
      </button>
      {showForm ?
        (<form className="formulario-nuevo-proyecto" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre del proyecto"
          name="projectName"
          onChange={handleOnChange}
          value={projectData.projectName}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar"
        />
      </form>)
    : null}
    </Fragment>
  );
};

export default FormCreateProject;
