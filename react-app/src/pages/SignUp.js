import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from "../assets/login/logo_login.png"
import signupStyles from "../styles/signup.module.css"
import SignUpForm from "../components/SignUp/SignUpForm";
import utils from "../components/utils/utils";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    if (utils.loggedIn())
        history.push("/");

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <Row className={signupStyles.row}>
            <Col md="6">
                <img className={signupStyles.logo} src={logo} alt="logo" />
            </Col>
            <Col className={signupStyles.signup} md="6" >
                <SignUpForm username={username} email={email} password={password} setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} onSubmit={onSubmit} />
            </Col>
        </Row>
    )
};

export default Signup;

