import React, {useState} from "react";
import requestItemStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RequestItem = ({ request, setID }) =>  (
        <Row className={requestItemStyles.item} onClick={() => setID(request.id)}>
            <Col md="3">
                <h4 className={requestItemStyles.text}>{request.id}</h4>
            </Col>
        </Row>
    )

export default RequestItem;

