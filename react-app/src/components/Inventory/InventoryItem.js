import React from "react";
import { useHistory } from "react-router-dom";
import warning from "../../assets/warning.png";
import styles from '../../styles/inventory.module.css';

const InventoryItem = ({ product, setID }) => {
    const history = useHistory();
    const banList = [ "MESA", "ABC", "AAA", "MAD", "CAD" ];

    return (
        banList.some(x => x == product.id) ? null :
        <tr onClick={() => { setID(product.id); history.push("/inventory/" + product.id) }}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            {product.danger === "true" ? (<td>
                <div className={styles.tooltip}>
                    <img className={styles.warningimg} src={warning} alt="warning" />
                    <span className={styles.tooltiptext}>Warning: Not enought stock to fullfil orders</span>
                </div>
            </td>) : (<td></td>)}
        </tr>
    );
};

export default InventoryItem;

