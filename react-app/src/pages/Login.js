import React, { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from "../assets/login/logo_login.png"
import loginStyles from "../styles/login.module.css"
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:3002/api/employees/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            })
        })
        .then(res => res.json())
        .then(res => {
            this.setToken(res.token)
        })
        .then((data) => {
            console.log(data);
          })
        .catch(console.log)
    }

    return (
        <Row className={loginStyles.row}>
            <Col md="6">
                <img className={loginStyles.logo} src={logo} alt="logo" />
            </Col>
            <Col className={loginStyles.login} md="6" >
                <LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} onSubmit={onSubmit} />
            </Col>
        </Row>
    )
};

export default Login;

