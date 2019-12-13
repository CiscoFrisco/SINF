import React, { useState } from "react";
import inventoryItemStyles from "../../../styles/list.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemOrder = ({ item, setChecked}) => {
  return(
  <tr className= {item.completed ? inventoryItemStyles.orderItemChecked : inventoryItemStyles.orderItemNotChecked}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
    <td>{item.section}</td>
    <td>      
      <input
          className={inventoryItemStyles.checkbox}
          name="hasProduct"
          type="checkbox"
          checked={item.completed}
          onChange= {() => setChecked(item.id, item.completed)} />
    </td>
</tr>
  )
  };

export default ItemOrder;
