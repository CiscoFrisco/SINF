import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WarehouseSections from "../components/Warehouse/WarehouseSections"
import Section from "../components/Warehouse/Section";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Warehouse = () => {
    const {url_id} = useParams();
    const [id, setID] = useState(url_id);
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
            console.log(data);
            console.log(url_id);
            if(!data.filter(section => section.id == url_id).length > 0){
                setID(data[0]["id"]);
                history.push("/warehouse/" + data[0]["id"]);
            }
            setSections(data);
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

