import React, { useState } from "react";
import requestsListStyles from '../../styles/list.module.css';
import { Row, Col, Button, Modal, Table, Container } from 'react-bootstrap';
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
                    <Table style={{ marginTop: '5%' }} hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Sender</th>
                                <th>Wave</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(sender => (<RequestsItem key={sender.id} sender={sender} setID={setID} />))}
                        </tbody>
                    </Table>

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

