import React from "react";
import {Row, Col} from "react-bootstrap";
import productStyles from "../../styles/inventory.module.css";
import classNames from "classnames";
import ProductLinkList from "../../components/Inventory/ProductLinkList";
import ProductLinkListItem from "../../components/Inventory/ProductLinkListItem";

const Product = ({ product,requests, orders }) => { 
  return (
    <div className={productStyles.productInfoContainer}>
      <Row
        className={classNames(productStyles.separator, productStyles.inline)}
      >
        <h3>
          {product.id} - {product.name}
        </h3>
      </Row>
      <Row className={(productStyles.center, productStyles.separator)}>
        <Col md="4">
          <h4 className={productStyles.infoTitles}>Stock Available</h4>
          <p style={{marginLeft:"45%"}}>{product.quantity}</p>
        </Col>
        <Col md={{ span: 5, offset: 2 }}>
          <h4 className={productStyles.infoTitles}>Warehouse Section</h4>
          {product.section != null ? 
          (<ProductLinkListItem key={product.section} item={product.section} type="warehouse" />) 
          :(<p style={{marginLeft:"45%"}}>N/A</p>)}
        </Col>
      </Row>
      {requests.length > 0 ? (
        <Row className={productStyles.separator}>
          <Col className={classNames(productStyles.infoTitles2,productStyles.requestsMargin)}>
            <h4 className={productStyles.h4}>Requests</h4>
            <ProductLinkList list={requests} type="requests" />
          </Col>
        </Row>
      ) : (<h3 style={{ textAlign: "center", marginTop: "3em", marginBottom: "2em" }}>No Requests to Show</h3>)}
      {orders.length > 0 ? (
        <Row>
          <Col className={productStyles.infoTitles2}>
            <h4 className={productStyles.h4}>Orders</h4>
            <ProductLinkList list={orders} type="orders" />
          </Col>
        </Row>
      ) : (<h3 style={{ textAlign: "center", marginTop: "2em"  }}>No Orders to Show</h3>)}
    </div>
  );
};

export default Product;
