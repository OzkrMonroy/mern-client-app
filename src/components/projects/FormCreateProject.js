import React, { Fragment, useState } from "react";

const FormCreateProject = () => {
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

  return (
    <Fragment>
      <button type="button" className="btn btn-primario btn-block">
        Nuevo proyecto
      </button>
      <form className="formulario-nuevo-proyecto" onSubmit={handleOnSubmit}>
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
      </form>
    </Fragment>
  );
};

export default FormCreateProject;
