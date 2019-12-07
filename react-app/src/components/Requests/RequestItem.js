import React, { useState } from "react";
import requestsItemStyles from "../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RequestItem = ({ item }) => (
  <Row className={requestsItemStyles.senderItem}>
    <Col md="2">
      <h5 className={requestsItemStyles.text}>{item.id}</h5>
    </Col>
    <Col md="8">
      <h5 className={requestsItemStyles.text}>{item.name}</h5>
    </Col>
    <Col md="2">
      <h5 className={requestsItemStyles.text}>{item.quantity}</h5>
    </Col>
  </Row>
);

export default RequestItem;
