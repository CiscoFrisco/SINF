import React from "react";
import sectionsListStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import WarehouseSection from './WarehouseSection';

const WarehouseSections = ({ section, setID }) => {
    return (
        <div>
            <Container className={sectionsListStyles.container}>
                <Col >
                    <Row className={sectionsListStyles.title}>
                        <h3>Sections</h3>
                    </Row>
                    <Row className={sectionsListStyles.header}>
                        <Col>
                            <h4>ID</h4>
                        </Col>
                    </Row>
                    {section.map(section => (<WarehouseSection section={section} setID={setID}/>))}
                </Col>
            </Container>
        </div>
    )
}

export default WarehouseSections;

