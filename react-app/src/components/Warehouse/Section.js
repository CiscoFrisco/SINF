import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
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
          <div className={classNames(scrollStyles.scroll, sectionListStyles.scrollList60)} style={{ marginTop: "5%" }}>
            <Table className={classNames(scrollStyles.scroll)} hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map(item => (
                  <SectionItem key={item.id} item={item} />
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Section;
