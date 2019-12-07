import React, {useState} from "react";
import inventoryItemStyles from '../../../styles/list.module.css';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WaveItem = ({ wave, setID }) =>  (
        <Row className={inventoryItemStyles.item} onClick={() => setID(wave.id)}>
            <Col md="4">
                <h4 className={inventoryItemStyles.text}>{wave.id}</h4>
            </Col>
            <Col md="8">
                <h4 className={inventoryItemStyles.text}>{wave.employee_id}</h4>
            </Col>
        </Row>
    )

export default WaveItem;

