import React from "react";
import employeeListStyles from '../../../styles/list.module.css';
import {Row, Col, Container, Table} from 'react-bootstrap/';

import WaveItem from './WaveItem';

const WaveList = ({ wave, setID }) => {
    return (
        <div>
            <Container className={employeeListStyles.container}>
                <Col >
                    <Row className={employeeListStyles.title}>
                        <h3>Waves</h3>
                    </Row>
                    <Table style={{marginTop: '5%'}}striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Employee ID </th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wave.map(wave => (<WaveItem key={wave.wave_id} wave={wave} setID={setID} />))}
                        </tbody>
                    </Table>
                </Col>
            </Container>
        </div>
    )
}

export default WaveList;

