import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import AlertsContext from '../../context/alerts/alertsContext';
import AuthContext from '../../context/authentication/authContext';

const Login = (props) => {
  const authContext = useContext(AuthContext)
  const {isAuthenticated, alertMessage, loginUser} = authContext

  const alertsContext = useContext(AlertsContext)
  const {showAlertMessage, showAlert} = alertsContext

  const [userData, setUserData] = useState({
    userEmail: '',
    userPassword: ''
  })

  useEffect(() => {
    if(isAuthenticated){
      props.history.push('/projects')
    }
    if(alertMessage){
      showAlert(alertMessage.message, alertMessage.category)
    }
    // eslint-disable-next-line
  }, [isAuthenticated, alertMessage, props.history])

  const handleOnChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }
  const handleOnSubmit = e => {
    const { userEmail, userPassword} = userData
    e.preventDefault()
    if(userEmail.trim() === '' || userPassword.trim() === ''){
      showAlert('Todos los campos son obligatorios', 'alerta-error')
      return
    }

    loginUser({ userEmail, userPassword})
  }

  return (
    <div className="form-usuario">
      {showAlertMessage ? 
        (<div className={`alerta ${showAlertMessage.category}`}>{showAlertMessage.message}</div>)
      : null}
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
