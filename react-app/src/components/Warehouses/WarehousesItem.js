import React, { useState } from "react";
import WarehousesItemStyles from "../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WarehousesItem = ({ location, setID }) => (
  <Row className={WarehousesItemStyles.item} onClick={() => setID(location.id)}>
    <Col md="3">
      <h4 className={WarehousesItemStyles.text}>{location.id}</h4>
    </Col>
    <Col md="9">
      <h4 className={WarehousesItemStyles.text}>{location.name}</h4>
    </Col>
  </Row>
);

export default WarehousesItem;
