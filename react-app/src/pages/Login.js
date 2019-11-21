import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo from "../assets/logo.png"
import login from "../assets/login.png"
import loginStyles from "../styles/login.module.css"
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <Container>
            <Row>
                <Col md="6">
                    <Row>
                        <Col>
                            <img className={loginStyles.logo} src={logo} alt="logo" />
                        </Col>
                        <Col>
                            <h1 className={loginStyles.h1}>OurApp</h1>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                    <img src={login} alt="login" />
                    <LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} onSubmit={onSubmit}/>
                </Col>
            </Row>
        </Container>
    )
};

export default Login;

