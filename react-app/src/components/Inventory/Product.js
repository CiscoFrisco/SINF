import React, { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import productStyles from '../../styles/inventory.module.css';
import defaultImg from '../../assets/product_imgs/default.png';
import classNames from 'classnames';
import ProductLinkList from '../../components/Inventory/ProductLinkList';
import ProductLinkListItem from '../../components/Inventory/ProductLinkListItem';
import listStyles from '../../styles/list.module.css';
import scrollStyles from '../../styles/scroll.module.css'

const Product = ({ product }) => {

    const requests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const orders = [11, 12, 13, 14, 15, 16, 17, 18];
    const locations = [1, 5, 17, 8,1,1,1,1,1];

    return (
        <div className={productStyles.productInfoContainer}>
            <Row className={classNames(productStyles.separator, productStyles.inline)}>
                <h3>{product.id} - {product.name}</h3>
            </Row>
            <Row className={productStyles.center, productStyles.separator}>
                <Col md="4">
                    <h4 className={productStyles.infoTitles} >Stock Available</h4>
                    <p>{product.quantity}</p>
                </Col>
                <Col md={{span:5 , offset:2}}>
                    <h4 className={productStyles.infoTitles}>Warehouse Location</h4>
                    <Row className={classNames(scrollStyles.scrolly, listStyles.scrolly10, listStyles.margin)}>
                        {locations.map(location => (<ProductLinkListItem id={location} type="location"/>))}
                    </Row>
                </Col>
            </Row>
            <Row className={productStyles.separator}>
                <Col classNames={productStyles.infoTitles2} md="6">
                    <h4 className={productStyles.h4}>Requests</h4>
                    <ProductLinkList list={requests} type='requests' />
                </Col>
                <Col classNames={productStyles.infoTitles2} md="6">
                    <h4 className={productStyles.h4}>Orders</h4>
                    <ProductLinkList list={orders} type='orders' />
                </Col>
            </Row>
        </div >
    )
}

export default Product;

