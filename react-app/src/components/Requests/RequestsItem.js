import React, { useState } from "react";
import requestsItemStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RequestsItem = ({ sender, setID }) => (
    <Row className={requestsItemStyles.item} onClick={() => setID(sender.id)}>
        <Col md="4">
            <h4 className={requestsItemStyles.text}>{sender.id}</h4>
        </Col>
        <Col md="8">
            <h4 className={requestsItemStyles.text}>{sender.name}</h4>
        </Col>
    </Row>
)

export default RequestsItem;

