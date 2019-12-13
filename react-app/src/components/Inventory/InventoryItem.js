import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import inventoryItemStyles from '../../styles/list.module.css';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InventoryItem = ({ product, setID }) => {
    const history = useHistory();

    return (
        <tr onClick={() => {setID(product.id); history.push("/inventory/" + product.id)}}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
        </tr>
    );
};

export default InventoryItem;

