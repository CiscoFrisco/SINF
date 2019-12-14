import React from "react";
import { useHistory } from "react-router-dom";

const InventoryItem = ({ product, setID }) => {
    const history = useHistory();

    return (
        <tr onClick={() => {setID(product.id); history.push("/inventory/" + product.id)}}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
        </tr>
    );
};

export default InventoryItem;

