import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import OrderList from "../components/Orders/OrderList";
import Client from "../components/Orders/Client";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Orders = () => {
    const [id, setID] = useState(1);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("/api/sales/orders", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setOrders(data);
            if(isLoading)
                setID(data[0]["id"]);
            setIsLoading(false);
        })
        .catch(console.log);
    },[]);

    return (isLoading ? <Layout></Layout> :
    (
        orders.length > 0 ? 
        (
            <Layout 
            list={<OrderList orders={orders} setID={setID} />} 
            activeItem={<Client client={orders.find(order => order.id == id)} />} />)
                : (
                <div>
                    <Toolbar />
                    <h1 className={styles.empty}>There are no orders</h1>
                </div>
            )
        )
    )
}

export default Orders;