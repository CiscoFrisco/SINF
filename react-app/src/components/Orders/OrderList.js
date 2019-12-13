import React from "react";
import orderListStyles from '../../styles/list.module.css';
import {Row, Table, Col, Container} from 'react-bootstrap/';
import OrdersItem from './OrdersItem';

const OrderList = ({ orders, setID }) => {
    return (
        <div>
            <Container className={orderListStyles.container}>
                <Col >
                    <Row className={orderListStyles.title}>
                        <h3>Orders</h3>
                    </Row>
                    <Table style={{marginTop: '5%'}} hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Client</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(client => (<OrdersItem client={client} setID={setID} />))}
                        </tbody>
                    </Table>
                </Col>
            </Container>
        </div>
    )
}

export default OrderList;

