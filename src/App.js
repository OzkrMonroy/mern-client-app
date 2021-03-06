import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Projects from "./components/projects/Projects";
import ProjectState from "./context/proyectos/projectState";
import TasksState from "./context/tasks/tasksState";
import AlertState from "./context/alerts/alertsState";
import AuthState from "./context/authentication/authState";
import AuthToken from "./config/tokenAuth";
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";

const token = localStorage.getItem('token')
if(token){
  AuthToken(token)
}

function App() {
  return (
    <ProjectState>
      <TasksState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <AuthenticatedRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TasksState>
    </ProjectState>
  );
}

export default App;
