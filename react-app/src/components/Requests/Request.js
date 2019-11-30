import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import requestStyles from "../../styles/request.module.css";
import classNames from "classnames";
import requestListStyles from "../../styles/list.module.css";
import scrollStyles from "../../styles/scroll.module.css";
import ProductItem from "./ProductItem";

const Request = ({ request }) => {
  const productItems = [
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
    <div className={requestStyles.requestInfoContainer}>
      <Row
        className={classNames(requestStyles.separator, requestStyles.inline)}
      >
        <h3> Request - {request.id}</h3>
      </Row>
      <Container className={requestListStyles.container}>
        <Col>
          <Row className={requestListStyles.title}>
            <h4>Product List</h4>
          </Row>
          <Row className={requestListStyles.itemheader}>
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
          <div className={classNames(scrollStyles.scroll,requestListStyles.scroll60)}>
            {productItems.map(item => (
              <ProductItem item={item} />
            ))}{" "}
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Request;
