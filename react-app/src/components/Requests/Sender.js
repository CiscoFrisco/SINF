import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import senderStyles from "../../styles/sender.module.css";
import defaultImg from "../../assets/product_imgs/default.png";
import classNames from "classnames";
import RequestItem from "./RequestItem";
import senderListStyles from "../../styles/list.module.css";
import scrollStyles from "../../styles/scroll.module.css";

const Sender = ({ sender }) => {
  const requestItems = sender.productList;
  const lang_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(sender.date);

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
              <p>{date.toLocaleDateString("en-US", lang_options)}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container className={senderListStyles.container}>
        <Col>
          <Row className={senderListStyles.title}>
            <h4>Product List</h4>
          </Row>
          <Table className={classNames(scrollStyles.scroll)} style={{ marginTop: '5%' }} hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name </th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {requestItems.map(item => (
                <RequestItem key={item.id} item={item} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Container>
    </div>
  );
};

export default Sender;
