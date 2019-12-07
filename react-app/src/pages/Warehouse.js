import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WarehouseSections from "../components/Warehouse/WarehouseSections"
import Section from "../components/Warehouse/Section";

const Warehouse = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    const section = [{ id: 1}, { id: 2}];
    return (
        <Layout 
        list={<WarehouseSections section={section} setID={setID}/>} 
        activeItem={<Section section={section.find(section => section.id == id)}/>} 
        />
    )
}

export default Warehouse;

