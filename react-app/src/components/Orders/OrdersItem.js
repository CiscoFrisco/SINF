import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Col, Button, Form, Modal } from 'react-bootstrap';

const OrdersItem = ({ client, setID }) => {
    const [employees, setEmployees] = useState([]);
    const [show, setShow] = useState(null);
    const history = useHistory();
    const [selectedEmployee, setSelectedEmployee] = useState(null);

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
                setSelectedEmployee(data[0].email);
            })
            .catch(console.log);
    }, []);

    const isToday = () => {
        const currDate = new Date();
        const orderDate = new Date(client.date);

        return currDate.getDate() === orderDate.getDate() &&
               currDate.getMonth() === orderDate.getMonth() &&
               currDate.getFullYear() === orderDate.getFullYear();
    }

    const createWave = () => {
        let id_employee;
        
        employees.forEach((employee) => {
            if(selectedEmployee === employee.email)
                id_employee = employee.id;
        });

        fetch('/api/waves', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ref: client.id,
                party: client.name,
                id_employee: id_employee,
                waveItems: client.productList
            })
        });
    }

    const handleChange = (e) => {
        setSelectedEmployee(e.target.value);
    }

    return (

            <tr onClick={() => { setID(client.id); history.push("/orders/" + client.id)}}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>
                    {!client.wave && isToday() && (
                    <Button variant="dark" onClick={() => setShow(client.id)}> Create Wave</Button>
                ) }</td>
                <Modal show={show != null} onHide={() => setShow(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Wave for Order {show}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Assign Employee</Form.Label>
                            <Form.Control as="select" onChange={handleChange}>
                                <option disabled>Choose...</option>
                                {employees.map(employee => (<option key={employee.id} id={employee.id}>{employee.email}</option>))}
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
            </tr>
    )
};

export default OrdersItem;

