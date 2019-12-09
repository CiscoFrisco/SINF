import React, { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import productStyles from '../../styles/inventory.module.css';
import defaultImg from '../../assets/product_imgs/default.png';
import classNames from 'classnames';
import ProductLinkList from '../../components/Inventory/ProductLinkList';

const Product = ({ product }) => {

    const requests = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14];
    const orders = [11, 12, 13, 14, 15, 16, 17, 18];

    return (
        <div className={productStyles.productInfoContainer}>
            <Row className={classNames(productStyles.separator, productStyles.inline)}>
                <h3>{product.id} - {product.name}</h3>
            </Row>
            <Row className={productStyles.center}>
                <Col className={productStyles.nopadding} md="4">
                    <img className={productStyles.userImg} src={defaultImg} alt="product" />
                </Col>
                <Col md="8">
                    <Row className={productStyles.separator}>
                        <Col md="6">
                            <h4 className={productStyles.infoTitles}>Serial Number</h4>
                            <p>{product.serialNumber}</p>
                        </Col>
                        <Col md="6">
                            <h4 className={productStyles.infoTitles} >Stock Available</h4>
                            <p style={{textAlign: 'center'}}>{product.quantity}</p>
                        </Col>
                    </Row>
                    <Row className={classNames(productStyles.separator, productStyles.padding_l3)}>
                        <Col >
                            <h4 className={productStyles.infoTitles}>Warehouse Location</h4>
                            <p>{product.location}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={productStyles.separator}>
                <Col classNames={productStyles.infoTitles2} md="6">
                    <h4 className={productStyles.h4}>Requests</h4>
                    <ProductLinkList list={requests} type='requests'/>
                </Col>
                <Col classNames={productStyles.infoTitles2} md="6">
                    <h4 className={productStyles.h4}>Orders</h4>
                    <ProductLinkList list={orders}  type='orders'/>
                </Col>
            </Row>
        </div >
    )
}

export default Product;

