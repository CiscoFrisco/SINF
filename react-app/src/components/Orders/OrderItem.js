import React, { useState } from "react";
import clientItemStyles from "../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OrderItem = ({ item }) => (
  <tr >
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
  </tr>
);

export default OrderItem;
