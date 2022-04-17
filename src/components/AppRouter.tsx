import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {RouteNames, routes} from "../routes";

const AppRouter = () => {
  const auth = true;
  return auth === true ? (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
      ))}
      <Redirect to={RouteNames.MAIN} />
    </Switch>
  ) : (
    <Switch></Switch>
  );
};

export default AppRouter;
