import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Projects from "./components/projects/Projects";
import ProjectState from "./context/proyectos/projectState";
import TasksState from "./context/tasks/tasksState";
import AlertState from "./context/alerts/alertsState";

function App() {
  return (
    <ProjectState>
      <TasksState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Router>
        </AlertState>
      </TasksState>
    </ProjectState>
  );
}

export default App;
