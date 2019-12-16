import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Row, Col, Alert} from "react-bootstrap";
import logo from "../assets/login/logo_login.png";
import signupStyles from "../styles/signup.module.css";
import SignUpForm from "../components/SignUp/SignUpForm";
import utils from "../components/utils/utils";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState("");
  const [error, setError] = useState("danger");

  const history = useHistory();
  document.title = "SignUp | OurApp";

  if (utils.loggedIn()) history.push("/");
  
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const onSubmit = e => {
    e.preventDefault();

    if (confirmPassword !== password) {
        setShow("Passwords do not match")
    } else {
      fetch("/api/employees/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.message !== undefined) {
            setShow(data.message);
            setError("danger");
          } else {
            setShow("Account successfully created!");
            setError("success");
            sleep(1000).then(()=> history.push("/login"))
          }
        })
        .catch(console.log);
    }
  };

  return (
    <Row className={signupStyles.row}>
      <Col md="6">
        <img className={signupStyles.logo} src={logo} alt="logo" />
        {show !== "" && (
          <Alert
            style={{ margin: "2% 0% 2% 2%" }}
            variant={error}
            onClose={() => setShow("")}
            dismissible
          >
            <p>{show}</p>
          </Alert>
        )}
      </Col>
      <Col className={signupStyles.signup} md="6">
        <SignUpForm
          username={username}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          onSubmit={onSubmit}
        />
      </Col>
    </Row>
  );
};

export default Signup;
