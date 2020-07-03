import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData, setUserData] = useState({
    userEmail: '',
    userPassword: ''
  })

  const handleOnChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    if(userData.userEmail.trim() === '' || userData.userPassword.trim() === ''){
      console.log('Inputs vacíos')
      return
    }

    console.log(userData)
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="userEmail"
              value={userData.userEmail}
              id="email"
              placeholder="Email"
              autoComplete="username"
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="userPassword"
              value={userData.userPassword}
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Login"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to="/register" className="enlace-cuenta">Crear cuenta</Link>
      </div>
    </div>
  );
};

export default Login;
