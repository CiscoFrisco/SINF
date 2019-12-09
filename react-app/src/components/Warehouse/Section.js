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
  return (
    <div className={senderStyles.senderInfoContainer}>
      <Row
        className={classNames(senderStyles.separator, senderStyles.inline)}
      >
        <h3>Section - {section.id} - {section.warehouse}</h3>
      </Row>
      <Container className={sectionListStyles.container}>
        <Col>
          <Row className={sectionListStyles.title}>
            <h4>Product List</h4>
          </Row>
          <Row className={sectionListStyles.itemheader}>
            <Col md="1" style={{ marginLeft: '1em' }}>
              <h4>ID</h4>
            </Col>
            <Col md="6" style={{ marginLeft: '2.2em' }}>
              <h4>Product Name</h4>
            </Col>
            <Col md="3" style={{ marginLeft: '1em' }}>
              <h4>Quantity</h4>
            </Col>
          </Row>
          <div className={classNames(scrollStyles.scroll, sectionListStyles.scroll60)}>
            {section.items.map(item => (
              <SectionItem item={item} />
            ))}{" "}
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Section;
