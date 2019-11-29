import React, {useState} from "react";
import inventoryItemStyles from '../../styles/list.module.css';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IncomingItem = ({ sender, setID }) =>  (
        <Row className={inventoryItemStyles.item} onClick={() => setID(sender.id)}>
            <Col md="3">
                <h4 className={inventoryItemStyles.text}>{sender.id}</h4>
            </Col>
            <Col md="9">
                <h4 className={inventoryItemStyles.text}>{sender.name}</h4>
            </Col>
        </Row>
    )

export default IncomingItem;

