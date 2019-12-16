import React from "react";
import ProductLinkListItem from "../Inventory/ProductLinkListItem";
import listStyles from '../../styles/list.module.css';
import scrollStyles from '../../styles/scroll.module.css';
import classnames from 'classnames';
import Table from "react-bootstrap/Table";

const ProductLinkList = ({ list, type }) => {
  console.log(type);
  console.log(list);

  return (
    <div className={classnames(scrollStyles.scroll, listStyles.scrollList20)} style={{ marginTop: "1%" }}>
      <Table hover>
        <thead>
          <tr>
            <th>Wave ID</th>
            {type === "requests" ? <th> Sender</th> : <th> Client</th>}
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <ProductLinkListItem key={item.id} item={item} type={type} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductLinkList;
