import React from "react";
import { useHistory } from "react-router-dom";
import Toolbar from '../components/Toolbar/Toolbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import warehouseStyles from '../styles/warehouse.module.css'
import warehouse from '../assets/warehouse_default.png';
import utils from "../components/utils/utils";
import classNames from 'classnames';

const Warehouse = () => {
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    return (
        <div>
            <Toolbar />
            <Row  className={classNames(warehouseStyles.page,warehouseStyles.underline)}>
                <h1 className={warehouseStyles.title}>Warehouse</h1>
            </Row>
            <Row  className={warehouseStyles.page}>
                <Col className={classNames(warehouseStyles.container,warehouseStyles.center)} md="9">
                    <img className={warehouseStyles.img} src={warehouse} alt="user" />
                </Col>
                <Col className={warehouseStyles.container} md="3">
                    <Row>
                        <h4>HEEEY</h4>
                    </Row>
                    <Row>
                        <h4>HAEEEY</h4>
                    </Row>
                </Col>
            </Row>
        </div >
    )
}

export default Warehouse;

