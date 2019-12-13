import React, { useState, useEffect } from "react";
import requestsListStyles from '../../styles/list.module.css';
import { Row, Col, Button, Modal, Table, Container, Form } from 'react-bootstrap';
import RequestsItem from './RequestsItem';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

const RequestsList = ({ requests, setID }) => {
    
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [suppliers, setSuppliers] = useState([]);
    const [items, setItems] = useState([]);
    const [isLoadingSuppliers, setIsLoadingSuppliers] = useState(true);
    const [isLoadingItems, setIsLoadingItems] = useState(true);
    const [product, setProduct] = useState('a');
    const [quantity, setQuantity] = useState(1);
    const [productsAdded, setProductsAdded] = useState([]);

    useEffect(() => {
        fetch("/api/purchases/suppliers", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setSuppliers(data);
                setIsLoadingSuppliers(false);
            })
            .catch(console.log);
    }, []);

    useEffect(() => {
        fetch("/api/purchases/items", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setIsLoadingItems(false);
            })
            .catch(console.log);
    }, []);

    const addProduct = () => {
        if(quantity>0 && product!='')
            {
                const newProduct = {
                    product:"fds",
                    quantity:3};
                setProductsAdded([...productsAdded, newProduct]);
                //setQuantity(3);
                //setProduct('n');
            }
    }

    const removeProduct = (productToRemove) => {
        var index = productsAdded.findIndex((product)=> product.product === productToRemove.product)
        if (index !== -1)
        {
            productsAdded.splice(index,1)
            setProductsAdded([...productsAdded])
        }
    }

    return (
        (isLoadingSuppliers || isLoadingItems) ? <div>Loading...</div> : (
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
                        <Modal.Title>Create New Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row style={{ marginLeft: "1%" }}>
                            <p style={{ marginRight: "2%" }}>Select Date</p>
                            <input id="date" type="date" defaultValue={date}></input>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Sender</Form.Label>
                                <Form.Control as="select">
                                    <option disabled>Choose...</option>
                                    {suppliers.map(supplier => (<option key={supplier} id={supplier}>{supplier}</option>))}
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Container style={{ padding: "3%" }}>
                            <Table>
                                <thead>
                                    <tr>
                                        <td>Product</td>
                                        <td>Quantity</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    productsAdded.map(item => (
                                    <tr>
                                        {console.log(item)}
                                        <td key={item.product} id={item.product}>{item.product}</td>
                                        <td key={item.quantity} id={item.quantity}>{item.quantity}</td>
                                        <td> <Button variant="dark" onClick={removeProduct(item)}><FaTrash/></Button></td>
                                    </tr>
                                    ))}
                                    <tr>
                                        <td>
                                            <Form.Group controlId="formGridState">
                                                <Form.Control as="select" >
                                                    <option disabled>Choose...</option>
                                                    {items.map(item => (<option key={item} id={item}>{item}</option>))}
                                                </Form.Control>
                                            </Form.Group>
                                        </td>
                                        <td><input type="text" id="quantity" type="number"/></td>
                                        <td><Button variant="dark" onClick={addProduct}><FaPlusCircle/></Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>

                    </Modal.Body>
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
    )
}

export default RequestsList;

