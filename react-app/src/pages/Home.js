import React, { useState, useEffect } from "react";
import Toolbar from '../components/Toolbar/Toolbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import homeStyles from '../styles/home.module.css'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Home = () => {

    return (
        <div>
            <Toolbar />
            <Row className={homeStyles.home}>
                <img className={homeStyles.logo} src={logo} alt="logo" />
                <Link to="/employees">
                    <div className={homeStyles.category, homeStyles.employees}>
                        <h3>Employees</h3>
                    </div>
                </Link>
                {/* <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.employees}>
                    <Link to="/employees" className="text-center">
                        <h3>Employees</h3>
                    </Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.inventory}>
                    <Link to="/inventory">
                        <h3>Inventory</h3>
                    </Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.warehouse}>
                    <Link to="/warehouse">
                        <h3>Warehouse</h3>
                    </Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.requests}>
                    <Link to="/requests">
                        <h3>Requests</h3>
                    </Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.incoming}>
                    <Link to="/incoming">
                        <h3>Incoming</h3>
                    </Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.orders}>
                    <Link to="/orders">
                        <h3>Orders</h3>
                    </Link>
                </Col>
                <Col className={homeStyles.img, homeStyles.seven, homeStyles.category, homeStyles.waves}>
                    <Link className="link" to="/waves">
                        <h3>Waves</h3>
                    </Link>
                </Col> */}
            </Row>
        </div >
    )
}

export default Home;

