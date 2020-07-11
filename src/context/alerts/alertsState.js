import React, { useReducer } from 'react'
import AlertsContext from './alertsContext'
import alertsReducer from './alertsReducer'
import { SHOW_ALERT, HIDE_ALERT } from '../../types'

const AlertState = (props) => {
  const initialState = {
    showAlertMessage: null
  }

  const [state, dispatch] = useReducer(alertsReducer, initialState)

  const showAlert = (message, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        message,
        category
      }
    })

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT
      })
    }, 5000);
  }

  return (
    <AlertsContext.Provider value={{showAlertMessage: state.showAlertMessage, showAlert}}>
      {props.children}
    </AlertsContext.Provider>
  )
}

export default AlertState