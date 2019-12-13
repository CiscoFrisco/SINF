import React from "react";

const SectionItem = ({ item }) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
  </tr>
);

export default SectionItem;
