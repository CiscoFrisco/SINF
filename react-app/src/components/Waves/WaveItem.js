import React from "react";
import waveItemStyles from '../../styles/waves/waveitem.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import classNames from 'classnames';

const WaveItem = ({ id }) => {

    // if(!utils.loggedIn())
    //     history.push("/login");

    return (
        <Link to={`/waves/${id}` }>
        <Button className={waveItemStyles.wave} variant="dark">{id}</Button>
        </Link >
    )
}

export default WaveItem;

