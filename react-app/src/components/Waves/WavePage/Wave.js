import React, { useState } from "react";
import wavesStyles from "../../../styles/wavesPage.module.css";
import ItemOrder from "./ItemOrder";
import scrollStyles from "../../../styles/scroll.module.css";
import classNames from "classnames";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import defaultImg from "../../../assets/profile_pics/default.png";

const Wave = ({ wave }) => {
  const inventoryIncoming = [
    { id: 1, name: "Black Air Forces", quantity: 10, order: '01' },
    { id: 2, name: "Supreme Shovel", quantity: 69, order: '13' },
    { id: 3, name: "Golos do Abou", quantity: 2, order: '07' },
    { id: 4, name: "Pernas do André Gomes", quantity: 1, order: '02' },
    { id: 5, name: "Champions do Benfica", quantity: 0, order: '08' }
  ];


  return (
    <div className={wavesStyles.wavesInfoContainer}>
      <div className={wavesStyles.size}>
        <Row className={wavesStyles.separator}>
          <h3>Wave - {wave.id}</h3>
        </Row>
        <Row className={classNames(wavesStyles.separator, wavesStyles.center)}>
          <Col className={wavesStyles.nopadding} md="2">
            <img
              className={wavesStyles.userImg}
              src={defaultImg}
              alt="product"
            />
          </Col>
          <Col >
            <h4 className={wavesStyles.infoTitles}>Employee Assigned</h4>
            <p>{wave.emp_name}</p>
          </Col>
        </Row>
        <Row className={classNames(wavesStyles.title, wavesStyles.padding_top)}>
          <h4>Product List</h4>
        </Row>
        <Row className={wavesStyles.itemheader}>
          <Col md="10" style={{ display: "flex" }}>
            <Col md="2" style={{ marginLeft: '0.5em' }} >
              <h5>ID</h5>
            </Col>
            <Col md="5">
              <h5>Product Name</h5>
            </Col>
            <Col md="3" style={{ marginLeft: '0.2em' }}>
              <h5>Quantity</h5>
            </Col>
            <Col md="1" style={{ marginLeft: '0.5em' }}>
              <h5>Order</h5>
            </Col>
          </Col>
        </Row>
        <div className={classNames(scrollStyles.scroll, wavesStyles.scroll30)}>
          {inventoryIncoming.map(item => (
            <ItemOrder item={item} />
          ))}{" "}
        </div>

      </div>
    </div>
  );
};

export default Wave;
