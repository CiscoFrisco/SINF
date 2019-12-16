import React from "react";
import orderListStyles from '../../styles/list.module.css';
import scrollStyle from '../../styles/scroll.module.css';
import classnames from 'classnames';
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
                    <div className={classnames(scrollStyle.scroll, orderListStyles.scrollList70)} style={{ marginTop: '5%' }}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Client</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(client => (<OrdersItem key={client.id}client={client} setID={setID} />))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default OrderList;

