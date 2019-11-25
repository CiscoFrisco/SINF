import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png";
import toolbarStyles from '../../styles/toolbar.module.css';
import user from '../../assets/profile_pics/default.png';

const Toolbar = () => (
    <Navbar className={toolbarStyles.nav} >
        <Navbar.Brand className={toolbarStyles.brand} href="/">
            <img className={toolbarStyles.logo} src={logo} alt="logo" />
        </Navbar.Brand>
        <NavDropdown components={{ DropdownIndicator: () => null }}
                     className={toolbarStyles.dropdown} 
                     title={<img className={toolbarStyles.user} src={user} alt="user"/>} 
                     id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
        </NavDropdown>
    </Navbar>
)

export default Toolbar;