import React, { useState, useEffect } from "react";
import Toolbar from '../components/Toolbar/Toolbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import homeStyles from '../styles/home.module.css'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

var classNames = require('classnames');

const Home = () => {
    const categoryHovered = false;
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
                <Link to="/incoming">
                    <div className={classNames(homeStyles.category, homeStyles.incoming)}>
                        <h4 className={ homeStyles.text}>Incoming</h4>
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

