import React from "react";
import { useHistory } from "react-router-dom";
import inventoryItemStyles from '../../../styles/list.module.css';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WaveItem = ({ wave, setID }) => {
    const history = useHistory();

    return (
        <Row className={inventoryItemStyles.item} onClick={() => { setID(wave.id); history.push("/waves/" + wave.wave_id) }}>
            <Col md="4">
                <h4 className={inventoryItemStyles.text}>{wave.wave_id}</h4>
            </Col>
            <Col md="5">
                <h4 className={inventoryItemStyles.text}>{wave.id_employee}</h4>
            </Col>
            <Col md="3">
                <h4 className={inventoryItemStyles.text}>{wave.type}</h4>
            </Col>
        </Row>
    );
};

export default WaveItem;

