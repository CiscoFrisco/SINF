import React from "react";
import sectionsListStyles from '../../styles/list.module.css';
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
                    <Table style={{ marginTop: '5%' }} hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {section.map(section => (<WarehouseSection section={section} setID={setID} />))}
                        </tbody>
                    </Table>
                </Col>
            </Container>
        </div>
    )
}

export default WarehouseSections;

