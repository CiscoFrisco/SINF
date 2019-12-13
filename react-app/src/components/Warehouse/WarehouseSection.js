import React from "react";
import { useHistory } from "react-router-dom";

const WarehouseSection = ({ section, setID }) => {
    const history = useHistory();

    return (
        <tr onClick={() => { setID(section.id); history.push("/warehouse/" + section.id) }}>
            <td>{section.id}</td>
            <td>{section.warehouse}</td>
        </tr>
    );
};

export default WarehouseSection;

