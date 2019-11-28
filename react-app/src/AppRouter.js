import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Login from './pages/Login';
import Employees from './pages/Employees';
import Inventory from './pages/Inventory';

  const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/2">
                <Home2 />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/employees">
                <Employees />
            </Route>
            <Route path="/inventory">
                <Inventory />
            </Route>
            <Route path="/warehouse">
                <Login />
            </Route>
            <Route path="/requests">
                <Login />
            </Route>
            <Route path="/incoming">
                <Login />
            </Route>
            <Route path="/orders">
                <Login />
            </Route>
            <Route path="/waves">
                <Login />
            </Route>

        </Switch>
    </Router>
)

export default AppRouter;