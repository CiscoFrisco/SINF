import React from "react";
import {useHistory} from "react-router-dom";
import Toolbar from '../components/Toolbar/Toolbar';
import Row from 'react-bootstrap/Row'
import home2Styles from '../styles/home2.module.css'
import { Link } from "react-router-dom";
import utils from "../components/utils/utils";

var classNames = require('classnames');

const Home2 = () => {
    const history = useHistory();
    
    if(!utils.loggedIn())
        history.push("/login");

    return (
        <div>
            <Toolbar />
            <Row className={home2Styles.row}>
                <Link to="/warehouse">
                    <div className={classNames(home2Styles.category, home2Styles.warehouse)}>
                        <h4 className={ home2Styles.text}>Warehouse</h4>
                    </div>
                </Link>
                <Link to="/requests">
                    <div className={classNames(home2Styles.category, home2Styles.requests)}>
                        <h4 className={ home2Styles.text}>Requests</h4>
                    </div>
                </Link>
                <Link to="/incoming">
                    <div className={classNames(home2Styles.category, home2Styles.incoming)}>
                        <h4 className={ home2Styles.text}>Incoming</h4>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className={classNames(home2Styles.category, home2Styles.orders)}>
                        <h4 className={ home2Styles.text}>Orders</h4>
                    </div>
                </Link>
            </Row>
        </div >
    )
}

export default Home2;

