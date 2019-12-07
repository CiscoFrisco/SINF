import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WarehouseSections from "../components/Warehouse/WarehouseSections"
import Section from "../components/Warehouse/Section";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Warehouse = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    const section = [{ id: 1}, { id: 2}];
    return (
        section.length > 0  ? (
        <Layout 
        list={<WarehouseSections section={section} setID={setID}/>} 
        activeItem={<Section section={section.find(section => section.id == id)}/>} 
        /> ) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>Warehouse is empty</h1>
            </div>
        )
    )
}

export default Warehouse;

