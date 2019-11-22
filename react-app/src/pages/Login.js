import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo from "../assets/logo_login.png"
import loginStyles from "../styles/login.module.css"
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
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

