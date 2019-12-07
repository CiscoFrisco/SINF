import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Toolbar from '../components/Toolbar/Toolbar';
import { Row, Col, Dropdown } from 'react-bootstrap'
import warehouseStyles from '../styles/warehouse.module.css'
import warehouse from '../assets/warehouse_default.png';
import utils from "../components/utils/utils";
import classNames from 'classnames';

const Warehouse = () => {
    const history = useHistory();

    return (
        <div>
            <Toolbar />
            <Row className={warehouseStyles.page}>
                <h1 className={classNames(warehouseStyles.title, warehouseStyles.underline)}>Warehouse</h1>
            </Row>
            <Row className={classNames(warehouseStyles.page, warehouseStyles.padding)}>
                <Col className={classNames(warehouseStyles.container, warehouseStyles.center)} md="8">
                    <img className={warehouseStyles.img} src={warehouse} alt="user" />
                </Col>
                <Col className={warehouseStyles.container} md="4">
                    <Row className={warehouseStyles.dropdown}>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Warehouse Section
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Section 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Section 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Section 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>
                    <Row className={warehouseStyles.margin}>
                        <h1>Stock List in this Section</h1>
                    </Row>
                </Col>
            </Row>
        </div >
    )
}

export default Warehouse;

