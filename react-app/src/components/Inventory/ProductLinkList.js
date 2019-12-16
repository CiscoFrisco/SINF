import React from "react";
import ProductLinkListItem from "../Inventory/ProductLinkListItem";
import Table from "react-bootstrap/Table";

const ProductLinkList = ({ list, type }) => {
  return (
    <Table style={{ marginTop: "5%" }} hover>
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
  );
};

export default ProductLinkList;
