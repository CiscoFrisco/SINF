import React from "react";
import utils from "./components/utils/utils";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, isAdmin, adminOnly, isHome, ...rest }) => {
  console.log(isAdmin + "|" + adminOnly);
    return (
    <Route
      {...rest}
      render={({ location }) =>
        !utils.loggedIn() ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        ) : ((adminOnly ==="true"  && isAdmin === "true") || (adminOnly === "false" && isAdmin === "false") || (adminOnly === "both")) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/unauthorized",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default connect(({ user }) => ({ isAdmin: user.role }))(PrivateRoute);
