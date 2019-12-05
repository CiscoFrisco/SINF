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
import Warehouses from './pages/Warehouses';

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
            <Route path="/warehouse/:id">
                <Warehouse />
            </Route>
            <Route path="/requests">
                <Requests general={false} />
            </Route>
            <Route path="/incoming">
                <Incoming general={false}/>
            </Route>
            <Route path="/orders">
                <Orders general={false}/>
            </Route>
            <Route path="/waves">
                <Waves />
            </Route>
            <Route path="/warehouses">
                <Warehouses />
            </Route>
            <Route path="/requests_g">
                <Requests general={true} />
            </Route>
            <Route path="/incoming_g">
                <Incoming general={true} />
            </Route>
            <Route path="/orders_g">
                <Orders general={true} />
            </Route>
        </Switch>
    </Router>
)

export default AppRouter;