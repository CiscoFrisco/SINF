import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import HomeMaster from './pages/HomeMaster';
  import Login from './pages/Login';

  const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <HomeMaster />
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
        </Switch>
    </Router>
  )

  export default AppRouter;