import React, {useState} from "react";
import inventoryItemStyles from '../../styles/list.module.css';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InventoryItem = ({ product, setID }) =>  (
        <Row className={inventoryItemStyles.item} onClick={() => setID(product.id)}>
            <Col md="3">
                <h4 className={inventoryItemStyles.text}>{product.id}</h4>
            </Col>
            <Col md="7">
                <h4 className={inventoryItemStyles.text}>{product.name}</h4>
            </Col>
            <Col md="2">
                <h4 className={inventoryItemStyles.text}>{product.quantity}</h4>
            </Col>
        </Row>
    )

export default InventoryItem;

