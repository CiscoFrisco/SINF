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
import { Link } from "react-router-dom";

const Client = ({ client }) => {
  const lang_options = { weekday:'long', year:'numeric', month:'long', day:'numeric'};
  const date = new Date(client.date);

  return (
    <div className={clientStyles.clientInfoContainer}>
      <Row
        className={classNames(clientStyles.separator, clientStyles.inline)}
      >
        <h3> Order - {client.id}</h3>
      </Row>
      <Row
        className={clientStyles.center}
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
              <h4 className={clientStyles.infoTitles}>Client</h4>
              <p>{client.name}</p>
            </Col>
          </Row>
          <Row className={clientStyles.separator}>
            <Col>
              <h4 className={clientStyles.infoTitles}>Date</h4>
              <p>{date.toLocaleDateString("en-US", lang_options)}</p>
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
            <Col md="2" style={{marginLeft: '1em'}}>
              <h4>ID</h4>
            </Col>
            <Col md="5" style={{marginLeft: '2em'}}>
              <h4>Product Name</h4>
            </Col>
            <Col md="2" style={{marginLeft: '2em'}}>
              <h4>Quantity</h4>
            </Col>
          </Row>
          <div className={classNames(scrollStyles.scroll,clientListStyles.scroll30)}>
            {client.productList.map(item => (
              <OrderItem item={item} />
            ))}{" "}
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Client;
