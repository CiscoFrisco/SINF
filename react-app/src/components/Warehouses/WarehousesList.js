import React from "react";
import WarehousesItemStyles from "../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import WarehousesItem from "./WarehousesItem";

const WarehousesList = ({ locations, setID }) => {
  return (
    <div>
      <Container className={WarehousesItemStyles.container}>
        <Col>
          <Row className={WarehousesItemStyles.title}>
            <h3>Warehouses</h3>
          </Row>
          <Row className={WarehousesItemStyles.header}>
            <Col md="3">
              <h4>ID</h4>
            </Col>
            <Col md="9">
              <h4>Location</h4>
            </Col>
          </Row>
          {locations.map(location => (
            <WarehousesItem location={location} setID={setID} />
          ))}
        </Col>
      </Container>
    </div>
  );
};

export default WarehousesList;
