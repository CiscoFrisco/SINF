import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col, Alert } from "react-bootstrap";
import logo from "../assets/login/logo_login.png";
import loginStyles from "../styles/login.module.css";
import LoginForm from "../components/Login/LoginForm";
import utils from "../components/utils/utils";

import { setUserRole, setUserID } from "../actions/userActions";

const Login = ({ setUserRole, setUserID }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const history = useHistory();
  document.title = "Login | OurApp";

  if (utils.loggedIn()) history.push("/");

  const onSubmit = e => {
    e.preventDefault();
    fetch("/api/employees/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message != undefined) {
          setShow(data.message);
        } else {
            utils.setToken(data.token);
            setUserID(data.id);
            setUserRole(data.role);
            history.push("/");
        }
      })
      .catch(console.log);
  };

  return (
    <Row className={loginStyles.row}>
      <Col md="6">
        <img className={loginStyles.logo} src={logo} alt="logo" />
        {show != "" && (
          <Alert style={{margin:'87% 0% 2% 2%'}} variant="danger" onClose={() => setShow("")} dismissible>
            <p>{show}</p>
          </Alert>
        )}
      </Col>
      <Col className={loginStyles.login} md="6">
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          onSubmit={onSubmit}
        />
      </Col>
    </Row>
  );
};

export default connect(null, { setUserRole, setUserID })(Login);
