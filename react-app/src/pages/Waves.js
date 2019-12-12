import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WaveList from "../components/Waves/WavePage/WaveList";
import Wave from "../components/Waves/WavePage/Wave";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Waves = () => {
    const {url_id} = useParams();
    const [id, setID] = useState(url_id);
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
            if(!data.filter(wave => wave.wave_id == url_id).length > 0){
                setID(data[0]["wave_id"]);
                history.push("/waves/" + data[0]["wave_id"]);
            }
            setWaves(data);
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