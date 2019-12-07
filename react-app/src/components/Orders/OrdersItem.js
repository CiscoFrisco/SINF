import React, {useState} from "react";
import orderItemStyles from '../../styles/list.module.css';
import {Row, Col} from 'react-bootstrap';

const OrdersItem = ({ client, setID }) =>  (
        <Row className={orderItemStyles.item} onClick={() => setID(client.id)}>
            <Col md="3">
                <h4 className={orderItemStyles.text}>{client.id}</h4>
            </Col>
            <Col md="4">
                <h4 className={orderItemStyles.text}>{client.name}</h4>
            </Col>
        </Row>
    )

export default OrdersItem;
