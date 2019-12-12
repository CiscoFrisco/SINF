import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import sectionStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WarehouseSection = ({ section, setID }) => {
    const history = useHistory();
    
    return (
        <Row className={sectionStyles.item} onClick={() => { setID(section.id); history.push("/warehouse/" + section.id) }}>
            <Col>
                <h4 className={sectionStyles.text}>{section.id}</h4>
            </Col>
            <Col>
                <h4 className={sectionStyles.text}>{section.warehouse}</h4>
            </Col>
        </Row>
    );
};

export default WarehouseSection;

