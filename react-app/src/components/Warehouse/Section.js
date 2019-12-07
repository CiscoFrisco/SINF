import React from "react";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import senderStyles from "../../styles/sender.module.css";
import classNames from "classnames";
import SectionItem from "./SectionItem";
import sectionListStyles from "../../styles/list.module.css";
import scrollStyles from "../../styles/scroll.module.css";

const Section = ({ section }) => {
  const requestItems = [
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
        <h3>Section - {section.id}</h3>
      </Row>
      <Container className={sectionListStyles.container}>
        <Col>
          <Row className={sectionListStyles.title}>
            <h4>Product List</h4>
          </Row>
          <Row className={sectionListStyles.itemheader}>
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
          <div className={classNames(scrollStyles.scroll, sectionListStyles.scroll60)}>
            {requestItems.map(item => (
              <SectionItem item={item} />
            ))}{" "}
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Section;
