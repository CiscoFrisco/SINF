import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WaveList from "../components/Waves/WavePage/WaveList";
import Wave from "../components/Waves/WavePage/Wave";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Waves = () => {
    const [id, setID] = useState(1);
    const [waves, setWaves] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("/api/waves", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setWaves(data);
            if(isLoading)
                setID(data[0]["wave_id"]);
            setIsLoading(false);
        })
        .catch(console.log);
    },[]);

    return (isLoading ? <Layout></Layout> :
        waves.length > 0  ?( 
        <Layout 
        list={<WaveList wave={waves} setID={setID} />} 
        activeItem={<Wave wave={waves.find(waves => waves.wave_id == id)} />} 
        />) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>There are no waves</h1>
            </div>
        )
    )
}

export default Waves;