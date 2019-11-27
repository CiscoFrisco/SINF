import React from "react";
import { useHistory } from "react-router-dom";
import Toolbar from '../components/Toolbar/Toolbar';
import utils from "../components/utils/utils";
import employeeStyles from '../styles/employee.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Employee from '../components/Employees/Employee';
import classNames from 'classnames';

const Employees = () => {
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");
    const employee = {id: 13, name: 'Jesus Corolla', birthday:'13 - 4 - 2017', gender:'male',firstJoined:'14 - 4 - 2017 (2 years ago)'}
    return (
        <div>
            <Toolbar />
            <Row className={employeeStyles.rowContainer}>
                <Col className={employeeStyles.colContainer}>
                    <div></div>
                </Col>
                <Col className={classNames(employeeStyles.colContainer, employeeStyles.employeeContainer)}>
                    <Employee employee={employee} />
                </Col>
            </Row>
        </div >
    )
}

export default Employees;

