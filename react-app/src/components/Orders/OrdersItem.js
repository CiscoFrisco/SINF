import React, {useState} from "react";
import orderItemStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OrdersItem = ({ sender, setID }) =>  (
        <Row className={orderItemStyles.item} onClick={() => setID(sender.id)}>
            <Col md="3">
                <h4 className={orderItemStyles.text}>{sender.id}</h4>
            </Col>
            <Col md="9">
                <h4 className={orderItemStyles.text}>{sender.name}</h4>
            </Col>
        </Row>
    )

export default OrdersItem;

