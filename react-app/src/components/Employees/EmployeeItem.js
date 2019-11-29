import React, {useState} from "react";
import employeeItemStyles from '../../styles/list.module.css';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmployeeItem = ({ employee, setID }) =>  (
        <Row className={employeeItemStyles.item} onClick={() => setID(employee.id)}>
            <Col md="3">
                <h4 className={employeeItemStyles.text}>{employee.id}</h4>
            </Col>
            <Col md="9">
                <h4 className={employeeItemStyles.text}>{employee.email}</h4>
            </Col>
        </Row>
    )

export default EmployeeItem;

