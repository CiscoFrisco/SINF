import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import senderStyles from "../../styles/sender.module.css";
import defaultImg from "../../assets/product_imgs/default.png";
import classNames from "classnames";
import InventoryItemIncoming from "./InventoryItemIncoming";
import senderListStyles from "../../styles/list.module.css";
import scrollStyles from "../../styles/scroll.module.css";

const Sender = ({ sender }) => {
  const inventoryIncoming = [
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
    <div className={senderStyles.senderInfoContainer}>
      <Row
        className={classNames(senderStyles.separator, senderStyles.inline)}
      >
        <h3>Incoming Inventory - {sender.id}</h3>
      </Row>
      <Row
        className={classNames(senderStyles.separator, senderStyles.center)}
      >
        <Col className={senderStyles.nopadding} md="4">
          <img
            className={senderStyles.userImg}
            src={defaultImg}
            alt="product"
          />
        </Col>
        <Col md="8">
          <Row className={senderStyles.separator}>
            <Col>
              <h4 className={senderStyles.infoTitles}>Sender</h4>
              <p>{sender.name}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container className={senderListStyles.container}>
        <Col>
          <Row className={senderListStyles.title}>
            <h4>Product List</h4>
          </Row>
          <Row className={senderListStyles.itemheader}>
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
          <div className={classNames(scrollStyles.scroll,senderListStyles.scroll30)}>
            {inventoryIncoming.map(item => (
              <InventoryItemIncoming item={item} />
            ))}{" "}
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Sender;
