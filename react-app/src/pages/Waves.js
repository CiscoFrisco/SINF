import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WaveList from "../components/Waves/WavePage/WaveList";
import Wave from "../components/Waves/WavePage/Wave";

const Waves = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    const waves = [{ id: 1, employee_id: '002' }, { id: 2, employee_id: '005999' }];
    return (
        <Layout 
        list={<WaveList wave={waves} setID={setID} />} 
        activeItem={<Wave wave={waves.find(waves => waves.id == id)} />} 
        />
    )
}

export default Waves;