import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
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
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="/unauthorized">
                <Unauthorized />
            </Route>
            <PrivateRoute adminOnly="both" exact path="/">
                <Home />
            </PrivateRoute>
            <PrivateRoute adminOnly="true" path="/employees/:url_id">
                <Employees />
            </PrivateRoute>
            <PrivateRoute adminOnly="false" path="/employee">
                <EmployeePage />
            </PrivateRoute>
            <PrivateRoute adminOnly="false" path="/wave/:url_id">
                <Waves />
            </PrivateRoute>
            <PrivateRoute adminOnly="true" path="/inventory/:url_id">
                <Inventory />
            </PrivateRoute>
            <PrivateRoute adminOnly="true" path="/warehouse/:url_id">
                <Warehouse />
            </PrivateRoute>
            <PrivateRoute adminOnly="true" path="/requests/:url_id">
                <Requests />
            </PrivateRoute>
            <PrivateRoute adminOnly="true" path="/orders/:url_id">
                <Orders />
            </PrivateRoute>
            <PrivateRoute adminOnly="true" path="/waves/:url_id">
                <Waves />
            </PrivateRoute>
            <Route>
                <Error />
            </Route>
        </Switch>
    </Router>
)


export default AppRouter;