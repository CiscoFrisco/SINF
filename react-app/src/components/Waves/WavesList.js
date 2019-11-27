import React from "react";
import wavesListStyles from '../../styles/waves/waveslist.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WaveItem from '../Waves/WaveItem';
import classNames from 'classnames';

const WavesList = ({waves}) => {

    // if(!utils.loggedIn())
    //     history.push("/login");

    return (
        <div className={wavesListStyles.container}>
            {waves.map(wave => (<WaveItem id={wave}/>))}
        </div>
    )
}

export default WavesList;

