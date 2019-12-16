import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import InventoryList from "../components/Inventory/InventoryList";
import Product from "../components/Inventory/Product";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from "../styles/list.module.css";

const Inventory = () => {
  const { url_id } = useParams();
  const [id, setID] = useState(url_id);
  const [stock, setStock] = useState([]);
  const [requests, setRequests] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOne, setIsLoadingOne] = useState(true);
  const [isLoadingTwo, setIsLoadingTwo] = useState(true);
  const history = useHistory();
  document.title = "Inventory | OurApp";

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
        setRequests(
          data.filter(request =>
            request.productList.some(x => x.id === id)
          )
        );
        setIsLoadingOne(false);
      })
      .catch(console.log);
  }, [id]);

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
          data.filter(order => order.productList.some(x => x.id === id))
        );
        setIsLoadingTwo(false);
      })
      .catch(console.log);
  }, [id]);

  useEffect(() => {
    
    fetch("/api/stock", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (!data.filter(product => product.id === url_id).length > 0) {
          setID(data[0]["id"]);
          history.push("/inventory/" + data[0]["id"]);
        }
        setStock(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return isLoading || isLoadingOne || isLoadingTwo ? (
    <Layout></Layout>
  ) : stock.length > 0 ? (
    <Layout
      list={<InventoryList inventory={stock} setID={setID} />}
      activeItem={
        <Product product={stock.find(product => product.id === id)} requests={requests} orders={orders} />
      }
    />
  ) : (
    <div>
      <Toolbar />
      <h1 className={styles.empty}>Inventory is empty</h1>
    </div>
  );
};

export default Inventory;
