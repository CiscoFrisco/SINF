import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import OrderList from "../components/Orders/OrderList";
import Client from "../components/Orders/Client";

const Orders = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    const orders = [{ id: 1, name: 'SportZone' }, { id: 2, name: 'Massimo Dutti' }];
    return (
        <Layout 
        list={<OrderList orders={orders} setID={setID} />} 
        activeItem={<Client client={orders.find(order => order.id == id)} />} 
        />
    )
}

export default Orders;