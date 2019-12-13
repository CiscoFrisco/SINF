import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Employees from './pages/Employees';
import EmployeePage from './pages/EmployeePage';
import Inventory from './pages/Inventory';
import Requests from './pages/Requests';
import Orders from './pages/Orders';
import Waves from './pages/Waves';
import Warehouse from './pages/Warehouse';
import Error from "./pages/Error";
import PrivateRoute from "./PrivateRoute";


const AppRouter = () => (
    <Router>
        <Switch>
            <PrivateRoute isHome exact path="/">
                <Home />
            </PrivateRoute>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <PrivateRoute adminOnly path="/employees/:url_id">
                <Employees />
            </PrivateRoute>
            <PrivateRoute path="/employee">
                <EmployeePage />
            </PrivateRoute>
            <PrivateRoute adminOnly path="/inventory/:url_id">
                <Inventory />
            </PrivateRoute>
            <PrivateRoute adminOnly path="/warehouse/:url_id">
                <Warehouse />
            </PrivateRoute>
            <PrivateRoute adminOnly path="/requests/:url_id">
                <Requests />
            </PrivateRoute>
            <PrivateRoute adminOnly path="/orders/:url_id">
                <Orders />
            </PrivateRoute>
            <PrivateRoute adminOnly path="/waves/:url_id">
                <Waves />
            </PrivateRoute>
            <Route>
                <Error />
            </Route>
        </Switch>
    </Router>
)


export default AppRouter;