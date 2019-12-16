import React from "react";
import inventoryListStyles from '../../styles/list.module.css';
import scrollStyle from '../../styles/scroll.module.css';
import classnames from 'classnames';
import { Row, Col, Container, Table } from 'react-bootstrap/';
import InventoryItem from './InventoryItem';

const InventoryList = ({ inventory, setID }) => {
    return (
        <div>
            <Container className={inventoryListStyles.container}>
                <Col >
                    <Row className={inventoryListStyles.title}>
                        <h3>Inventory</h3>
                    </Row>
                    <div className={classnames(scrollStyle.scroll, inventoryListStyles.scrollList)} style={{ marginTop: '5%' }}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product Name </th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory.map(product => (<InventoryItem key={product.id} product={product} setID={setID} />))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default InventoryList;

