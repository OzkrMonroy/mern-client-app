import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AlertsContext from '../../context/alerts/alertsContext';
import AuthContext from '../../context/authentication/authContext';

const Register = (props) => {
  const alertsContext = useContext(AlertsContext)
  const {showAlertMessage, showAlert} = alertsContext

  const authContext = useContext(AuthContext)
  const {isAuthenticated, alertMessage, registerUser} = authContext

  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: ''
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
    e.preventDefault()
    const {userEmail, userPassword, userName, userPasswordConfirm} = userData

    if(userEmail.trim() === '' || userPassword.trim() === '' || userName.trim() === '' || userPasswordConfirm === ''){
      console.log('Inputs vacíos')
      showAlert('Los campos son obligatorios', 'alerta-error');
      return
    }
    if(userPassword.length < 6){
      showAlert('La contraseña debe de tener mínimo seis caracteres', 'alerta-error');
      return
    }
    if(userPassword !== userPasswordConfirm){
      showAlert('Las contraseñas deben de coincidir', 'alerta-error');
      return
    }

    showAlert('Todos los datos son correctos', 'alerta-ok');
    console.log(userData)
    registerUser({
      userName,
      userEmail,
      userPassword
    })
  }

  return (
    <div className="form-usuario">
      {showAlertMessage ? 
        (<div className={`alerta ${showAlertMessage.category}`}>{showAlertMessage.message}</div>)
      : null}
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