import React, { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import productStyles from '../../styles/inventory.module.css';
import defaultImg from '../../assets/product_imgs/default.png';
import { MdDelete } from 'react-icons/md';
import WavesList from '../Waves/WavesList';
import classNames from 'classnames';
import Modal from 'react-bootstrap/Modal';

const Product = ({ product }) => {

    const waves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    return (
        <div className={productStyles.employeeInfoContainer}>
            <Row className={classNames(productStyles.separator, productStyles.inline)}>
                <h3>{product.id} - {product.name}</h3>
            </Row>
            <Row className={classNames(productStyles.separator, productStyles.center)}>
                <Col className={productStyles.nopadding} md="4">
                    <img className={productStyles.userImg} src={defaultImg} alt="product" />
                </Col>
                <Col md="8">
                    <Row className={productStyles.separator}>
                        <Col>
                            <h4 className={productStyles.infoTitles}>Serial Number</h4>
                            <p>{product.serialNumber}</p>
                        </Col>
                    </Row>
                    <Row className={classNames(productStyles.separator, productStyles.padding_l3)}>
                        <h4 className={productStyles.infoTitles}> Warehouse Location</h4>
                        <p>{product.location}</p>
                    </Row>
                </Col>
            </Row>
            <Row className={classNames(productStyles.separator, productStyles.infoTitles2)}>
                <h4>Assigned Waves</h4>
                <WavesList waves={waves} />
            </Row>
        </div >
    )
}

export default Product;

