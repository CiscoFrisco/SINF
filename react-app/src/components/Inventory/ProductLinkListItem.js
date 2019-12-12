import React from "react";
import linkListItemStyles from '../../styles/listlink.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import classNames from 'classnames';

const ProductLinkListItem = ({ id, type }) => {
    const path='/' + type + '/';

    return (
        <Link to={`${path + id}`}>
            {type=="location" ? ( 
            <Button variant="dark" className={linkListItemStyles.location}><div className={linkListItemStyles.itemText}>{id}</div></Button>)
             :(
            <Button className={linkListItemStyles.item} variant="dark"><div className={linkListItemStyles.itemText}>{id}</div></Button>)}
        </Link >
    )
}

export default ProductLinkListItem;

