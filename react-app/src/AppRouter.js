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
import Inventory from './pages/Inventory';
import Requests from './pages/Requests';
import Orders from './pages/Orders';
import Waves from './pages/Waves';
import Warehouse from './pages/Warehouse';
import Error from "./pages/Error";
import utils from "./components/utils/utils";


const AppRouter = () => (
    <Router>
        <Switch>
            {/* <PrivateRoute exact path="/">
                <Home />
            </PrivateRoute>
            <Route path="/login">
                <Login />
            </Route>
            <PrivateRoute path="/employees">
                <Employees />
            </PrivateRoute>
            <PrivateRoute path="/inventory">
                <Inventory />
            </PrivateRoute>
            <PrivateRoute path="/warehouse">
                <Warehouse />
            </PrivateRoute>
            <PrivateRoute path="/requests">
                <Requests />
            </PrivateRoute>
            <PrivateRoute path="/orders">
                <Orders />
            </PrivateRoute>
            <PrivateRoute path="/waves">
                <Waves />
            </PrivateRoute> */}


            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <SignUp />
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
            <Route path="/orders">
                <Orders />
            </Route>
            <Route path="/waves">
                <Waves />
            </Route>
            <Route exact path='*'>
                <Error />
            </Route>
        </Switch>
    </Router>
)

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                utils.loggedIn() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default AppRouter;