import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import defaultImg from "../../assets/profile_pics/default.png";
import classNames from "classnames";
import warehousesStyles from "../../styles/warehouses.module.css";

const Location = ({ location }) => {
  const manager = { name: "Moussa Marega" };
  return (
    <div className={warehousesStyles.clientInfoContainer}>
      <Row
        className={classNames(
          warehousesStyles.separator,
          warehousesStyles.inline
        )}
      >
        <h3>
          {location.id} - {location.name}
        </h3>
      </Row>
      <Row
        className={classNames(
          warehousesStyles.separator,
          warehousesStyles.center
        )}
      >
        <Col className={warehousesStyles.nopadding} md="4">
          <img
            className={warehousesStyles.userImg}
            src={defaultImg}
            alt="product"
          />
        </Col>
        <Col md="8">
          <Row className={warehousesStyles.separator}>
            <Col>
              <h4 className={warehousesStyles.infoTitles}>Warehouse</h4>
              <Button variant="dark" className={warehousesStyles.button}>
                <p className={warehousesStyles.text}>Layout</p>
              </Button>
            </Col>
          </Row>
          <Row className={warehousesStyles.separator}>
            <Col>
              <h4 className={warehousesStyles.infoTitles}>Manager</h4>
              <p>{manager.name}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
