import React from "react";
import { useHistory } from "react-router-dom";

const EmployeeItem = ({ employee, setID }) => {

    const history = useHistory();

    return (
        <tr onClick={() => {setID(employee.id); history.push("/employees/" + employee.id)}}>
            <td>{employee.id}</td>
            <td>{employee.email}</td>
            <td>404 Not Found</td>
        </tr>
    );
};

export default EmployeeItem;

