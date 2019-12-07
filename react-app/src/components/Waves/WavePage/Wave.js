import React, { useState } from "react";
import wavesStyles from "../../../styles/wavesPage.module.css";
import ItemOrder from "./ItemOrder";
import scrollStyles from "../../../styles/scroll.module.css";
import classNames from "classnames";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaUserAlt } from 'react-icons/fa';
import defaultImg from "../../../assets/profile_pics/default.png";

const Wave = ({ wave }) => {
  const inventoryIncoming = [
    { id: 1, name: "Black Air Forces", quantity: 10, order: '01' },
    { id: 2, name: "Supreme Shovel", quantity: 69, order: '13'},
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
      <Row>
        <Row className={wavesStyles.separator}>
          <h4 className={wavesStyles.infoTitles}>Employee Assigned</h4>
        </Row>
        <Row >
          <Col className={wavesStyles.nopadding} md="1">
            <img
              className={wavesStyles.userImg}
              src={defaultImg}
              alt="product"
            />
          </Col>
          <Col className={wavesStyles.inline} >
            In Young Jang
          </Col>
        </Row>       
      </Row>
          <Row className={wavesStyles.title}>
            <h4>Product List</h4>
          </Row>
          <Row className={wavesStyles.itemheader}>
            <Col md="1" >
              <h4>ID</h4>
            </Col>
            <Col md="5">
              <h4>Product Name</h4>
            </Col>
            <Col md="2" style={{marginLeft: '1em'}}>
              <h4>Quantity</h4>
            </Col>
            <Col md="1">
              <h4>{ }</h4>
            </Col>
            <Col md="1">
              <h4>Order</h4>
            </Col>
          </Row>
          <div className={classNames(scrollStyles.scroll,wavesStyles.scroll30)}>
            {inventoryIncoming.map(item => (
              <ItemOrder item={item} />
            ))}{" "}
          </div>
      
        </div>
    </div>
  );
};

export default Wave;
