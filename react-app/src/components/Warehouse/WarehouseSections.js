import React from "react";
import sectionsListStyles from '../../styles/list.module.css';
import scrollStyle from '../../styles/scroll.module.css';
import classnames from 'classnames';
import {Row, Col, Container, Table} from 'react-bootstrap';
import WarehouseSection from './WarehouseSection';

const WarehouseSections = ({ section, setID }) => {
    return (
        <div>
            <Container className={sectionsListStyles.container}>
                <Col >
                    <Row className={sectionsListStyles.title}>
                        <h3>Sections</h3>
                    </Row>
                    <div className={classnames(scrollStyle.scroll, sectionsListStyles.scrollList70)} style={{ marginTop: '5%' }}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.map(section => (<WarehouseSection key={section.id} section={section} setID={setID} />))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default WarehouseSections;

