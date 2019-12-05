import React from "react";
import orderListStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import OrdersItem from './OrdersItem';

const OrderList = ({ orders, setID, general }) => {
    return (
        <div>
            <Container className={orderListStyles.container}>
                <Col >
                    <Row className={orderListStyles.title}>
                        <h3>Orders</h3>
                    </Row>
                    <Row className={orderListStyles.header}>
                        <Col md="3">
                            <h4>ID</h4>
                        </Col>
                        <Col md="4">
                            <h4>Client</h4>
                        </Col>
                        {general && (<Col md="5">
                            <h4>Warehouse</h4>
                        </Col>)}
                    </Row>
                    {orders.map(client => (<OrdersItem client={client} setID={setID} general={general} />))}
                </Col>
            </Container>
        </div>
    )
}

export default OrderList;

