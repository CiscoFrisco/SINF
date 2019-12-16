import React, { useState, useEffect } from "react";
import requestsListStyles from '../../styles/list.module.css';
import scrollStyle from '../../styles/scroll.module.css';
import { Row, Col, Button, Modal, Table, Container, Form } from 'react-bootstrap';
import RequestsItem from './RequestsItem';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import classnames from 'classnames';

const RequestsList = ({ requests, setID }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [suppliers, setSuppliers] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoadingSuppliers, setIsLoadingSuppliers] = useState(true);
  const [isLoadingItems, setIsLoadingItems] = useState(true);
  const [sender, setSender] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [id, setId] = useState(0);
  const [productsAdded, setProductsAdded] = useState([]);

  useEffect(() => {
    fetch("/api/purchases/suppliers", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
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
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setIsLoadingItems(false);
      })
      .catch(console.log);
  }, []);

  const addProduct = async () => {
    try {
      setId(id + 1);
    } finally {
      if (quantity > 0 && product !== "") {
        const newProduct = { id: id, product: product, quantity: quantity };
        const util = productsAdded;
        util.push(newProduct);
        setProductsAdded(util);
      }
    }
  };

  const removeProduct = productToRemoveId => {
    var index = productsAdded.findIndex(
      product => product.id === productToRemoveId
    );
    if (index !== -1) {
      productsAdded.splice(index, 1);
      setProductsAdded([...productsAdded]);
    }
  };

  const sendRequest = async () => {
    const documentLines = [];
    productsAdded.forEach(product => {
      const purchasesItem = items.find(
        item => item.description === product.product
      );
      documentLines.push({
        description: product.product,
        quantity: parseInt(product.quantity),
        deliveryDate: new Date(date).toISOString(),
        unit: "UN",
        itemTaxSchema: "IVA-TN",
        purchasesItem: purchasesItem.itemKey,
        documentLineStatus: 1
      });
    });

    const params = {
      documentType: "ECF",
      company: "SLGBA",
      documentDate: new Date().toISOString(),
      postingDate: new Date().toISOString(),
      sellerSupplierParty: "0001", //HardCoded - change to sender.id or something
      sellerSupplierPartyName: sender,
      accountingParty: "0001", //HardCoded - not sure if needs change
      exchangeRate: 1.0,
      discount: 0.0,
      loadingCountry: "PT",
      unloadingCountry: "PT",
      currency: "EUR",
      paymentMethod: "NUM",
      paymentTerm: "01",
      documentLines: documentLines
    };
    fetch("/api/purchases/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
  };

  return isLoadingSuppliers || isLoadingItems ? (
    <div>Loading...</div>
  ) : (
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
            <div className={classnames(scrollStyle.scroll, requestsListStyles.scrollList)} style={{ marginTop: '5%' }}>
                <Table hover>
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
            </div>
        </Col>
    </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginLeft: "1%" }}>
            <Col>
              <p style={{ marginBottom: "5%"}}>Select Date</p>
              <input
                style={{width: "100%", height:"40%", borderRadius:"4px", border:"1px solid grey" }}
                id="date"
                type="date"
                defaultValue={date}
                onChange={event => setDate(event.target.value)}
              ></input>
            </Col>
            <Col>
              <Form.Group
                as={Col}
                controlId="formGridState"
              >
                <Form.Label>Sender</Form.Label>
                <Form.Control
                  as="select"
                  onChange={event => setSender(event.target.value)}
                >
                  <option disabled selected>
                    Choose...
                  </option>
                  {suppliers.map(supplier => (
                    <option key={supplier} id={supplier}>
                      {supplier}{" "}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row></Row>
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
                {productsAdded.map(item => (
                  <tr key={item.id} id={item.id}>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button style={{ borderRadius:"5%"}}
                        variant="dark"
                        onClick={() => removeProduct(item.id)}
                      >
                        <FaTrash style={{ marginBottom:"25%"}}/>
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <Form.Group controlId="formGridState">
                      <Form.Control
                        as="select"
                        value={product}
                        onChange={event => setProduct(event.target.value)}
                      >
                        <option disabled selected>
                          Choose...
                        </option>
                        {items.map(item => (
                          <option key={item} id={item}>
                            {item.description}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </td>
                  <td style={{ paddingTop:"3.5%"}}>
                    <input
                      className={requestsListStyles.inputQt}
                      style={{width: "50%", height:"70%", borderRadius:"3px", border:"1px solid grey" }}
                      type="text"
                      id="quantity"
                      type="number"
                      min="0"
                      value={quantity}
                      onChange={event => setQuantity(event.target.value)}
                    />
                  </td>
                  <td>
                    <Button style={{ borderRadius:"5%"}} variant="dark" onClick={addProduct}>
                      <FaPlusCircle style={{ marginBottom:"25%"}}/>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="dark" onClick={() => sendRequest()}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RequestsList;
