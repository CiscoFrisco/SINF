import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";


const WaveItem = ({ wave, setID, isAdmin }) => {
    const history = useHistory();
    const path = isAdmin === "false" ? ("/wave/" + wave.wave_id) : ("/waves/" + wave.wave_id);

    return (
    <tr onClick={() => {setID(wave.wave_id); history.push(path) }}>
        <td>{wave.wave_id}</td>
        <td>{wave.id_employee}</td>
        <td>{wave.type}</td>
    </tr>
    );
};

export default connect(({ user }) => ({ isAdmin: user.role}))(WaveItem);


