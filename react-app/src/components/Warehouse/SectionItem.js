import React, { useState } from "react";
import sectionItemStyles from "../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionItem = ({ item }) => (
  <Row className={sectionItemStyles.senderItem}>
    <Col md="2">
      <h5 className={sectionItemStyles.text}>{item.id}</h5>
    </Col>
    <Col md="8">
      <h5 className={sectionItemStyles.text}>{item.name}</h5>
    </Col>
    <Col md="2">
      <h5 className={sectionItemStyles.text}>{item.quantity}</h5>
    </Col>
  </Row>
);

export default SectionItem;
