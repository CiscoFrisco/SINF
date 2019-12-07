import React from "react";
import requestsListStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RequestsItem from './RequestsItem';

const RequestsList = ({ requests, setID }) => {
    return (
        <div>
            <Container className={requestsListStyles.container}>
                <Col >
                    <Row className={requestsListStyles.title}>
                        <h3>Requests</h3>
                    </Row>
                    <Row className={requestsListStyles.header}>
                        <Col md="4">
                            <h4>ID</h4>
                        </Col>
                        <Col md="8">
                            <h4>Sender</h4>
                        </Col>
                    </Row>
                    {requests.map(sender => (<RequestsItem sender={sender} setID={setID}/>))}
                </Col>
            </Container>
        </div>
    )
}

export default RequestsList;

