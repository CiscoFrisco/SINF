import React from "react";
import inventoryListStyles from '../../styles/list.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InventoryItem from './InventoryItem';

const InventoryList = ({ inventory, setID }) => {
    return (
        <div>
            <Container className={inventoryListStyles.container}>
                <Col >
                    <Row className={inventoryListStyles.title}>
                        <h3>Inventory</h3>
                    </Row>
                    <Row className={inventoryListStyles.header}>
                        <Col md="3">
                            <h4>ID</h4>
                        </Col>
                        <Col md="5">
                            <h4>Name</h4>
                        </Col>
                        <Col md="4">
                            <h4 style={{float: 'right'}}>Stock Available</h4>
                        </Col>
                    </Row>
                    {inventory.map(product => (<InventoryItem key={product.id} product={product} setID={setID} />))}
                </Col>
            </Container>
        </div>
    )
}

export default InventoryList;

