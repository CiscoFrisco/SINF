import React from "react";

const RequestItem = ({ item }) => (
  <tr >
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
  </tr>
);

export default RequestItem;
