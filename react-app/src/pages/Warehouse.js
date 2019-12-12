import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WarehouseSections from "../components/Warehouse/WarehouseSections"
import Section from "../components/Warehouse/Section";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Warehouse = () => {
    const [id, setID] = useState(1);
    const [sections, setSections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("/api/warehouses", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setSections(data);
            if(isLoading)
                setID(data[0]["id"]);
            setIsLoading(false);
        })
        .catch(console.log);
    },[]);

    return (isLoading ? <Layout></Layout> :
        sections.length > 0  ? (
        <Layout 
        list={<WarehouseSections section={sections} setID={setID}/>} 
        activeItem={<Section section={sections.find(section => section.id == id)}/>} 
        /> ) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>Warehouse is empty</h1>
            </div>
        )
    )
}

export default Warehouse;

