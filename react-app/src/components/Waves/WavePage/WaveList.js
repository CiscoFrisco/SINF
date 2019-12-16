import React from "react";
import wavesListStyles from '../../../styles/list.module.css';
import scrollStyle from '../../../styles/scroll.module.css';
import classnames from 'classnames';
import {Row, Col, Container, Table} from 'react-bootstrap/';

import WaveItem from './WaveItem';

const WaveList = ({ wave, setID }) => {
    return (
        <div>
            <Container className={wavesListStyles.container}>
                <Col >
                    <Row className={wavesListStyles.title}>
                        <h3>Waves</h3>
                    </Row>
                    <div className={classnames(scrollStyle.scroll, wavesListStyles.scrollList70)} style={{ marginTop: '5%' }}>
                        <Table hover>
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
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default WaveList;

