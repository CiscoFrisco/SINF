import React from "react";
import { useHistory } from "react-router-dom";
import employeeItemStyles from '../../styles/list.module.css';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmployeeItem = ({ employee, setID }) => {

    const history = useHistory();

    return (
        // <Row className={employeeItemStyles.item} onClick={() => {setID(employee.id); history.push("/employees/" + employee.id)}}>
        //     <Col md="4">
        //         <h4 className={employeeItemStyles.text}>{employee.id}</h4>
        //     </Col>
        //     <Col md="8">
        //         <h4 className={employeeItemStyles.text}>{employee.email}</h4>
        //     </Col>
        // </Row>
        <tr onClick={() => {setID(employee.id); history.push("/employees/" + employee.id)}}>
            <td>{employee.id}</td>
            <td>{employee.email}</td>
            <td>404 Not Found</td>
        </tr>
    );
};

export default EmployeeItem;

