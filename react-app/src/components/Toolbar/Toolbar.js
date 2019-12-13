import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png";
import toolbarStyles from "../../styles/toolbar.module.css";
import user from "../../assets/profile_pics/default.png";
import utils from "../utils/utils";

const Toolbar = () => {
  const history = useHistory();

  const handleLogout = history => () => {
    utils.logout();
    history.push("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className={toolbarStyles.brand} href="/">
        <img className={toolbarStyles.logo} src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/employees/1">Employees</Nav.Link>
          <Nav.Link href="/inventory/1">Inventory</Nav.Link>
          <Nav.Link href="/warehouse/1">Warehouse</Nav.Link>
          <Nav.Link href="/requests/1">Requests</Nav.Link>
          <Nav.Link href="/orders/1">Orders</Nav.Link>
          <Nav.Link href="/waves/1">Waves</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleLogout(history)}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;
