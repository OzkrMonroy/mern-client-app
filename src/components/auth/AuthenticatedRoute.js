import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

const AuthenticatedRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, isLoading, getUserAuthenticatedData } = authContext;

  useEffect(() => {
    getUserAuthenticatedData()
    // eslint-disable-next-line
  }, [])

  return (
    <Route
      {...props}
      render={(props) =>
        !isAuthenticated && !isLoading ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AuthenticatedRoute;
