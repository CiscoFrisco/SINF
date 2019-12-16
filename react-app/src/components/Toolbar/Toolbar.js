import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png";
import toolbarStyles from "../../styles/toolbar.module.css";
import utils from "../utils/utils";
import { connect } from "react-redux";

const Toolbar = ({ isAdmin }) => {
  console.log(isAdmin);
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
        {isAdmin === "true" ? (
          <Nav className="mr-auto">
            <Nav.Link href="/employees/1">Employees</Nav.Link>
            <Nav.Link href="/inventory/1">Inventory</Nav.Link>
            <Nav.Link href="/warehouse/1">Warehouse</Nav.Link>
            <Nav.Link href="/requests/1">Requests</Nav.Link>
            <Nav.Link href="/orders/1">Orders</Nav.Link>
            <Nav.Link href="/waves/1">Waves</Nav.Link>
          </Nav>
        ) : (
          <Nav className="mr-auto">
            <Nav.Link href="/employee">Employee</Nav.Link>
            <Nav.Link href="/wave/1">Waves</Nav.Link>
          </Nav>
        )}
        <Nav>
          <Nav.Link onClick={handleLogout(history)}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(({ user }) => ({ isAdmin: user.role }))(Toolbar);
