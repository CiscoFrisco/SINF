import React, { useState, useEffect } from "react";
import Toolbar from '../components/Toolbar/Toolbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import homeStyles from '../styles/home.module.css'
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div>
            <Toolbar />
            <Row className={homeStyles.home}>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.employees}>
                    <Link to="/employees">Employees</Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.inventory}>
                    <Link to="/inventory">Inventory</Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.warehouse}>
                    <Link to="/warehouse">Warehouse</Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.requests}>
                    <Link to="/requests">Requests</Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.incoming}>
                    <Link to="/incoming">Incoming</Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.orders}>
                    <Link to="/orders">Orders</Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.waves}>
                    <Link className="link" to="/waves">Waves</Link>
                </Col>
            </Row>
        </div>
    )
}

export default Home;

