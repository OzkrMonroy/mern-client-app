import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: ''
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
        <h1>Crear cuenta</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="userName"
              value={userData.userName}
              id="name"
              placeholder="Nombre"
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="username"
              name="userEmail"
              value={userData.userEmail}
              id="email"
              placeholder="Email"
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
            <label htmlFor="passwordConfirm">Password</label>
            <input
              type="password"
              name="userPasswordConfirm"
              value={userData.userPasswordConfirm}
              id="passwordConfirm"
              placeholder="Confirm Password"
              autoComplete="current-password"
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Register"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">Iniciar Sesión</Link>
      </div>
    </div>
  );
}
 
export default Register;