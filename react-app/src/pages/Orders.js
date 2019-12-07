import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import OrderList from "../components/Orders/OrderList";
import Client from "../components/Orders/Client";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Orders = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    const orders = [{ id: 1, name: 'SportZone', wh_name:'Las Bitches', wh_id:1 }, { id: 2, name: 'Massimo Dutti', wh_name: 'New Nibbas', wh_id:2 }];
    return (
        orders.length > 0  ? (
        <Layout 
        list={<OrderList orders={orders} setID={setID} />} 
        activeItem={<Client client={orders.find(order => order.id == id)} />} 
        />
    ) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>There are no orders</h1>
            </div>
    )
    )
}

export default Orders;