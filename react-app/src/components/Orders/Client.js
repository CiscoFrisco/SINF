import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import clientStyles from "../../styles/client.module.css";
import defaultImg from "../../assets/product_imgs/default.png";
import classNames from "classnames";
import clientListStyles from "../../styles/list.module.css";
import scrollStyles from "../../styles/scroll.module.css";
import OrderItem from "./OrderItem";

const Client = ({ client }) => {
  const orderItems = [
    { id: 1, name: "Black Air Forces", quantity: 10 },
    { id: 2, name: "Supreme Shovel", quantity: 69 },
    { id: 3, name: "Golos do Abou", quantity: 2 },
    { id: 4, name: "Pernas do André Gomes", quantity: 1 },
    { id: 5, name: "Champions do Benfica", quantity: 0 },
    { id: 6, name: "Golos do Abou", quantity: 2 },
    { id: 7, name: "Golos do Abou", quantity: 2 },
    { id: 8, name: "Golos do Abou", quantity: 2 },
    { id: 9, name: "Golos do Abou", quantity: 2 },
    { id: 10, name: "Golos do Abou", quantity: 2 }
  ];

  return (
    <div className={clientStyles.clientInfoContainer}>
      <Row
        className={classNames(clientStyles.separator, clientStyles.inline)}
      >
        <h3> Order - {client.id}</h3>
      </Row>
      <Row
        className={classNames(clientStyles.separator, clientStyles.center)}
      >
        <Col className={clientStyles.nopadding} md="4">
          <img
            className={clientStyles.userImg}
            src={defaultImg}
            alt="product"
          />
        </Col>
        <Col md="8">
          <Row className={clientStyles.separator}>
            <Col>
              <h4 className={clientStyles.infoTitles}>Sender</h4>
              <p>{client.name}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container className={clientListStyles.container}>
        <Col>
          <Row className={clientListStyles.title}>
            <h4>Product List</h4>
          </Row>
          <Row className={clientListStyles.itemheader}>
            <Col md="2">
              <h4>ID</h4>
            </Col>
            <Col md="7">
              <h4>Product Name</h4>
            </Col>
            <Col md="3">
              <h4>Quantity</h4>
            </Col>
          </Row>
          <div className={classNames(scrollStyles.scroll,clientListStyles.scroll30)}>
            {orderItems.map(item => (
              <OrderItem item={item} />
            ))}{" "}
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Client;
