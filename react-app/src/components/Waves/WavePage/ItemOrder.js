import React, { useState } from "react";
import inventoryItemStyles from "../../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InventoryItemIncoming = ({ item }) => (
  <Row className={inventoryItemStyles.orderWave}>
    <Col md="1" className={inventoryItemStyles.orderItem}>
      <h5 className={inventoryItemStyles.text}>{item.id}</h5>
    </Col>
    <Col md="6" className={inventoryItemStyles.orderItem}>
      <h5 className={inventoryItemStyles.text}>{item.name}</h5>
    </Col>
    <Col md="2" className={inventoryItemStyles.orderItem}>
      <h5 className={inventoryItemStyles.text}>{item.quantity}</h5>
    </Col>
    <Col md="1">
      <h4>{ }</h4>
    </Col>
    <Col md="1" className={inventoryItemStyles.orderItem}>
      <h5 className={inventoryItemStyles.text}>{item.order}</h5>
    </Col>
  </Row>
);

export default InventoryItemIncoming;
