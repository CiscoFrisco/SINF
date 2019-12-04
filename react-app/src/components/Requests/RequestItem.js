import React, {useState} from "react";
import requestItemStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RequestItem = ({ request, setID, general}) =>  (
        <Row className={requestItemStyles.item} onClick={() => setID(request.id)}>
            <Col md="1">
                <h4 className={requestItemStyles.text}>{request.id}</h4>
            </Col>
            {general && <Col md="11">
                            <h4 className={requestItemStyles.text}>{request.wh_name}</h4>
                        </Col>}
        </Row>
    )

export default RequestItem;

