import React from "react";
import { useHistory } from "react-router-dom";

const WaveItem = ({ wave, setID }) => {
    const history = useHistory();

    return (
    <tr onClick={() => {setID(wave.wave_id); history.push("/waves/" + wave.wave_id) }}>
        <td>{wave.wave_id}</td>
        <td>{wave.id_employee}</td>
        <td>{wave.type}</td>
    </tr>
    );
};

export default WaveItem;

