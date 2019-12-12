import React, {useState} from "react";
import requestsListStyles from '../../styles/list.module.css';
import {Row, Col, Button, Modal} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import RequestsItem from './RequestsItem';

const RequestsList = ({ requests, setID }) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Container className={requestsListStyles.container}>
                <Col >
                    <Row className={requestsListStyles.title}>
                        <Col md="10">
                            <h3>Requests</h3>
                        </Col>
                        <Col md={{ span: 2 }}>
                            <Button variant="dark" onClick={() => setShow(true)}>Create</Button>
                        </Col>
                    </Row>
                    <Row className={requestsListStyles.header}>
                        <Col md="4">
                            <h4>ID</h4>
                        </Col>
                        <Col md="8">
                            <h4>Sender</h4>
                        </Col>
                    </Row>
                    {requests.map(sender => (<RequestsItem sender={sender} setID={setID} />))}
                </Col>
            </Container>


            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure about that?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={() => setShow(false)}>
                        Accept
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RequestsList;

