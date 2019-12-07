import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import { Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import senderStyles from "../../styles/sender.module.css";
import defaultImg from "../../assets/product_imgs/default.png";
import classNames from "classnames";
import RequestItem from "./RequestItem";
import senderListStyles from "../../styles/list.module.css";
import scrollStyles from "../../styles/scroll.module.css";

const Sender = ({ sender }) => {
  const requestItems = sender.productList;

  return (
    <div className={senderStyles.senderInfoContainer}>
      <Row
        className={classNames(senderStyles.separator, senderStyles.inline)}
      >
        <h3>Request - {sender.id}</h3>
      </Row>
      <Row
        className={senderStyles.center}
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
          <Row className={senderStyles.separator}>
            <Col>
              <h4 className={senderStyles.infoTitles}>Date</h4>
              <p>{sender.date}</p>
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
            <Col md="2" style={{marginLeft: '1em'}}>
              <h4>ID</h4>
            </Col>
            <Col md="5" style={{marginLeft: '2.4em'}}>
              <h4>Product Name</h4>
            </Col>
            <Col md="3" style={{marginLeft: '1em'}}>
              <h4>Quantity</h4>
            </Col>
          </Row>
          <div className={classNames(scrollStyles.scroll, senderListStyles.scroll30)}>
            {requestItems.map(item => (
              <RequestItem item={item} />
            ))}{" "}
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Sender;
