import React, { useState } from "react";
import productItemStyles from "../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductItem = ({ item }) => (
  <Row className={productItemStyles.senderItem}>
    <Col md="2">
      <h5 className={productItemStyles.text}>{item.id}</h5>
    </Col>
    <Col md="8">
      <h5 className={productItemStyles.text}>{item.name}</h5>
    </Col>
    <Col md="2">
      <h5 className={productItemStyles.text}>{item.quantity}</h5>
    </Col>
  </Row>
);

export default ProductItem;
