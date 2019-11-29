import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import InventoryList from "../components/Inventory/InventoryList";
import Product from "../components/Inventory/Product";

const Inventory = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    const inventory = [{ id: 1, name: 'iPhoneX' }, { id: 2, name: 'SoundCore Liberty Air' }];
    return (
        <Layout 
        list={<InventoryList inventory={inventory} setID={setID} />} 
        activeItem={<Product product={inventory.find(product => product.id == id)} />} 
        />
    )
}

export default Inventory;