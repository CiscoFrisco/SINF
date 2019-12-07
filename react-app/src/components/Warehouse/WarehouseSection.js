import React, { useState } from "react";
import sectionStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WarehouseSection = ({ section, setID }) => (
    <Row className={sectionStyles.item} onClick={() => setID(section.id)}>
        <Col>
            <h4 className={sectionStyles.text}>{section.id}</h4>
        </Col>
    </Row>
)

export default WarehouseSection;

