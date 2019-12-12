import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import orderItemStyles from '../../styles/list.module.css';
import { Row, Col, Button, Form, Modal } from 'react-bootstrap';

const OrdersItem = ({ client, setID }) => {
    const [employees, setEmployees] = useState([]);
    const [show, setShow] = useState(null);
    const selectedEmployee = null;
    const history = useHistory();

    useEffect(() => {
        fetch("/api/employees", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
            })
            .catch(console.log);
    }, []);

    const isToday = () => {
        return true;/*const currDate = new Date();
        const orderDate = new Date(client.date);

        return currDate.getDate() == orderDate.getDate() &&
               currDate.getMonth() == orderDate.getMonth() &&
               currDate.getFullYear() == orderDate.getFullYear();*/
    }

    const createWave = (employee) => {
        employee = 1;
        fetch('/api/waves', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ref: client.id,
                party: client.name,
                id_employee: employee,
                waveItems: client.productList
            })
        });
    }

    return (
        <div>
            <Row className={orderItemStyles.item} onClick={() => { setID(client.id); history.push("/orders/" + client.id)}}>
                <Col md="4" style={{ marginTop: '0.3em' }}>
                    <h4 className={orderItemStyles.text}>{client.id}</h4>
                </Col>
                <Col md="5" style={{ marginTop: '0.3em' }}>
                    <h4 className={orderItemStyles.text}>{client.name}</h4>
                </Col>
                {isToday() && (<Col md="3">
                    <Button variant="dark" onClick={() => setShow(client.id)}> Create Wave</Button>
                </Col>)}

            </Row>

            <Modal show={show != null} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Wave for Order {show}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Assign Employee</Form.Label>
                        <Form.Control as="select">
                            <option disabled>Choose...</option>
                            {employees.map(employee => (<option id={employee.id}>{employee.email}</option>))}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(null)}>
                        Cancel
                </Button>
                    <Button variant="dark" onClick={() => {
                        createWave();
                        setShow(null);
                    }}>
                        Create
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default OrdersItem;

