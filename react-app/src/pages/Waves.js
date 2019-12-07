import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WaveList from "../components/Waves/WavePage/WaveList";
import Wave from "../components/Waves/WavePage/Wave";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Waves = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    const waves = [{id:1 , employee_id:2}, {id:2, employee_id:4}];
    return (
        waves.length > 0  ?( 
        <Layout 
        list={<WaveList wave={waves} setID={setID} />} 
        activeItem={<Wave wave={waves.find(waves => waves.id == id)} />} 
        />) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>There are no waves</h1>
            </div>
        )
    )
}

export default Waves;