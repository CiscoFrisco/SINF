import React from "react";
import unauthorized from "../assets/unauthorized.png";
import errorStyles from "../styles/error.module.css";
import {Row, Button, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Error = () => {
    document.title = "Forbidden | OurApp";

    return(
        <Container>
            <Row className="justify-content-md-center">
                <img className={errorStyles.unauthorized} src={unauthorized} alt="logo" />
            </Row>
            <Row className="justify-content-md-center">
                <h4 className={errorStyles.text}> Restricted area. Unauthorized personnel <b>KEEP OUT</b></h4>
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