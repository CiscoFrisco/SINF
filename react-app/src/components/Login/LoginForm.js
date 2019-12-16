import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginStyles from "../../styles/login.module.css";

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  onSubmit
}) => (
  <div className={loginStyles.form}>
    <h3 className={loginStyles.h3}>Login</h3>
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>
      <Row>
        <Link className={loginStyles.signin} to="/signup">
          Create an account
        </Link>
        <Button variant="light" type="submit" className={loginStyles.submit}>
          Login
        </Button>
      </Row>
    </Form>
  </div>
);

export default LoginForm;
