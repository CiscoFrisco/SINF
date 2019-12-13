import React, { useState } from "react";
import inventoryItemStyles from "../../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemOrder = ({ item, setChecked}) => {
  return(
  <Row className={inventoryItemStyles.orderWave}>
    <Col md="10" style={{display:"flex"}} className= {item.checked ? inventoryItemStyles.orderItemChecked : inventoryItemStyles.orderItemNotChecked}>
      <Col md="2" >
        <h6 className={inventoryItemStyles.waveText}>{item.id}</h6>
      </Col>
      <Col md="6" >
        <h6 className={inventoryItemStyles.waveText}>{item.name}</h6>
      </Col>
      <Col md="3" >
        <h6 className={inventoryItemStyles.waveText}>{item.quantity}</h6>
      </Col>
      <Col md="1" >
        <h6 className={inventoryItemStyles.waveText}>{item.order}</h6>
      </Col>
    </Col>

      <Col md="1">
        <input
            className={inventoryItemStyles.checkbox}
            name="hasProduct"
            type="checkbox"
            checked={item.completed}
            onChange= {() => setChecked(item.id, item.completed)} />
      </Col>
      
  </Row>
  )
  };

export default ItemOrder;
