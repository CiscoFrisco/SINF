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
import Incoming from './pages/Incoming';
import Orders from './pages/Orders';
import Requests from './pages/Requests';
import Waves from './pages/Waves';
import Warehouse from './pages/Warehouse';

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
                <Warehouse />
            </Route>
            <Route path="/requests">
                <Requests />
            </Route>
            <Route path="/incoming">
                <Incoming />
            </Route>
            <Route path="/orders">
                <Orders />
            </Route>
            <Route path="/waves">
                <Waves />
            </Route>
        </Switch>
    </Router>
)

export default AppRouter;