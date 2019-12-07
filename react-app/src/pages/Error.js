import React from "react";
import logo from "../assets/login/logo_login.png";
import errorStyles from "../styles/error.module.css";
import {Row, Button, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Error = () => {
    return(
        <Container>
            <Row className="justify-content-md-center">
                <img className={errorStyles.logo} src={logo} alt="logo" />
            </Row>
            <Row className="justify-content-md-center">
                <h4 className={errorStyles.text}> Oops. This page doesn't exist.</h4>
            </Row>
            <Row className="justify-content-md-center">
                <Link to="/">
                    <Button variant="dark" style={{marginTop: "1em"}}>Go Drunk, You're Home</Button>
                </Link>
            </Row>
            
        </Container>
    )
};

export default Error;