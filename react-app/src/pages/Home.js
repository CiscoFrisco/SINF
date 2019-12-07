import React  from "react";
import {useHistory} from "react-router-dom";
import Toolbar from '../components/Toolbar/Toolbar';
import Row from 'react-bootstrap/Row'
import homeStyles from '../styles/home.module.css'
import { Link } from "react-router-dom";
import utils from "../components/utils/utils";
import classNames from 'classnames';

const Home = () => {
    const history = useHistory();

    return (
        <div>
            <Toolbar />
            <Row className={homeStyles.row}>
                <Link to="/employees">
                    <div className={classNames(homeStyles.category, homeStyles.employees)}>
                        <h4 className={ homeStyles.text}>Employees</h4>
                    </div>
                </Link>
                <Link to="/inventory">
                    <div className={classNames(homeStyles.category, homeStyles.inventory)}>
                        <h4 className={ homeStyles.text}>Inventory</h4>
                    </div>
                </Link>
                <Link to="/warehouse">
                    <div className={classNames(homeStyles.category, homeStyles.warehouse)}>
                        <h4 className={ homeStyles.text}>Warehouse</h4>
                    </div>
                </Link>
                <Link to="/requests">
                    <div className={classNames(homeStyles.category, homeStyles.requests)}>
                        <h4 className={ homeStyles.text}>Requests</h4>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className={classNames(homeStyles.category, homeStyles.orders)}>
                        <h4 className={ homeStyles.text}>Orders</h4>
                    </div>
                </Link>
                <Link to="/waves">
                    <div className={classNames(homeStyles.category, homeStyles.waves)}>
                        <h4 className={ homeStyles.text}>Waves</h4>
                    </div>
                </Link>
            </Row>
        </div >
    )
}

export default Home;

