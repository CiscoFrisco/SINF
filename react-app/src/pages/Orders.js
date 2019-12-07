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

    const orders = [{ id: 1, name: 'SportZone', wh_name:'Las Bitches', wh_id:1 }, { id: 2, name: 'Massimo Dutti', wh_name: 'New Nibbas', wh_id:2 }];
    return (
        <Layout 
        list={<OrderList orders={orders} setID={setID} />} 
        activeItem={<Client client={orders.find(order => order.id == id)} />} 
        />
    )
}

export default Orders;