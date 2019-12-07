import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import InventoryList from "../components/Inventory/InventoryList";
import Product from "../components/Inventory/Product";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Inventory = () => {
    const [id, setID] = useState(1);
    const [stock, setStock] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("/api/stock", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setStock(data);
            if(isLoading)
                setID(data[0]["id"]);
            setIsLoading(false);
        })
        .catch(console.log);
    },[stock, setStock]);

    //const inventory = [{ id: 1, name: 'iPhoneX' }, { id: 2, name: 'SoundCore Liberty Air' }];
    return (isLoading ? <Layout></Layout> :
        stock.length > 0  ? (
        <Layout 
        list={<InventoryList inventory={stock} setID={setID} />} 
        activeItem={<Product product={stock.find(product => product.id == id)} />} 
        />) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>Inventory is empty</h1>
            </div>            
        )
    )
}

export default Inventory;