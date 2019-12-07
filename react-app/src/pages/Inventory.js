import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import InventoryList from "../components/Inventory/InventoryList";
import Product from "../components/Inventory/Product";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Inventory = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    const inventory = [{ id: 1, name: 'iPhoneX', quantity: 3 }, { id: 2, name: 'SoundCore Liberty Air', quantity: 5 }];
    return (
        inventory.length > 0  ? (
        <Layout 
        list={<InventoryList inventory={inventory} setID={setID} />} 
        activeItem={<Product product={inventory.find(product => product.id == id)} />} 
        />) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>Inventory is empty</h1>
            </div>            
        )
    )
}

export default Inventory;