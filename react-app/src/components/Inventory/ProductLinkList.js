import React from "react";
import listStyles from '../../styles/list.module.css';
import scrollStyles from '../../styles/scroll.module.css'
import ProductLinkListItem from '../Inventory/ProductLinkListItem';
import classNames from 'classnames';

const ProductLinkList = ({ list, type }) => (
    <div className={classNames(scrollStyles.scroll, listStyles.linkContainer, listStyles.title2)}>
        {list.map(item => (<ProductLinkListItem key={item} id={item} type={type} />))}
    </div>
)

export default ProductLinkList;

