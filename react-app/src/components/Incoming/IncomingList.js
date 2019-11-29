import React from "react";
import employeeListStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import IncomingItem from './IncomingItem';

const IncomingList = ({ incoming, setID }) => {
    return (
        <div>
            <Container className={employeeListStyles.container}>
                <Col >
                    <Row className={employeeListStyles.title}>
                        <h3>Incoming Inventory</h3>
                    </Row>
                    <Row className={employeeListStyles.header}>
                        <Col md="3">
                            <h4>ID</h4>
                        </Col>
                        <Col md="9">
                            <h4>Sender</h4>
                        </Col>
                    </Row>
                    {incoming.map(sender => (<IncomingItem sender={sender} setID={setID} />))}
                </Col>
            </Container>
        </div>
    )
}

export default IncomingList;

