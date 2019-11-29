import React, { useState } from "react";
import inventoryItemStyles from "../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InventoryItemIncoming = ({ item }) => (
  <Row className={inventoryItemStyles.senderItem}>
    <Col md="2">
      <h5 className={inventoryItemStyles.text}>{item.id}</h5>
    </Col>
    <Col md="8">
      <h5 className={inventoryItemStyles.text}>{item.name}</h5>
    </Col>
    <Col md="2">
      <h5 className={inventoryItemStyles.text}>{item.quantity}</h5>
    </Col>
  </Row>
);

export default InventoryItemIncoming;
