import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productStyles from "../../styles/inventory.module.css";
import classNames from "classnames";
import ProductLinkList from "../../components/Inventory/ProductLinkList";
import ProductLinkListItem from "../../components/Inventory/ProductLinkListItem";
import listStyles from "../../styles/list.module.css";
import scrollStyles from "../../styles/scroll.module.css";

const Product = ({ product }) => {
  const [isLoadingOne, setIsLoadingOne] = useState(true);
  const [isLoadingTwo, setIsLoadingTwo] = useState(true);
  const [requests, setRequests] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/purchases/requests", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setRequests(
          data.filter(request =>
            request.productList.some(x => x.id === product.id)
          )
        );
        setIsLoadingOne(false);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    fetch("/api/sales/orders", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        setOrders(
          data.filter(order => order.productList.some(x => x.id === product.id))
        );
        setIsLoadingTwo(false);
      })
      .catch(console.log);
  }, []);

  return isLoadingOne || isLoadingTwo ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
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
      {requests.length > 0 && (
        <Row className={productStyles.separator}>
          <Col className={productStyles.infoTitles2}>
            <h4 className={productStyles.h4}>Requests</h4>
            <ProductLinkList list={requests} type="requests" />
          </Col>
        </Row>
      )}
      {orders.length > 0 && (
        <Row>
          <Col classNames={productStyles.infoTitles2}>
            <h4 className={productStyles.h4}>Orders</h4>
            <ProductLinkList list={orders} type="orders" />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Product;
