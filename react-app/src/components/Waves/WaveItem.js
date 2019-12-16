import React from "react";
import {useHistory} from "react-router-dom";
import { connect } from "react-redux";

const WaveItem = ({ wave, isAdmin }) => {
    const history= useHistory();
    let itemsUtil=0;
    const path = isAdmin === "false" ? ("/wave/" + wave.wave_id) : ("/waves/" + wave.wave_id);
    
    const numberRemaining = () =>{
        console.log(wave.productList);
        wave.productList.forEach((item) => {
            if(item.completed === false)
            {
                itemsUtil+=1;
            }
        })
    }
    numberRemaining();
    return (
    <tr onClick={()=>history.push(path)}>
    
        <td>{wave.wave_id}</td>
        <td>{wave.type}</td>
        <td>{itemsUtil}</td>
    </tr>
    );
};

export default connect(({ user }) => ({ isAdmin: user.role}))(WaveItem);