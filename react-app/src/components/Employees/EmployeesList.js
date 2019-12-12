import React from "react";
import employeeListStyles from '../../styles/list.module.css';
import scrollStyles from '../../styles/scroll.module.css';
import {Row, Col, Container, Table} from 'react-bootstrap/';
import EmployeeItem from './EmployeeItem';

import classNames from 'classnames'

const EmployeesList = ({ employees, setID }) => {

    return (
        <div>
            <Container className={employeeListStyles.container}>
                <Col >
                    <Row className={employeeListStyles.title}>
                        <h3>Employees</h3>
                    </Row>
                    {/* <Row className={employeeListStyles.header}>
                        <Col md="4">
                            <h4>ID</h4>
                        </Col>
                        <Col md="8">
                            <h4>Email</h4>
                        </Col>
                    </Row>
                    <Col className={classNames(scrollStyles.scroll, employeeListStyles.listSize)}>
                        {employees.map(employee => (<EmployeeItem key={employee.id} employee={employee} setID={setID} />))}
                    </Col> */}
                    <Table style={{marginTop: '5%'}}striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email </th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (<EmployeeItem key={employee.id} employee={employee} setID={setID} />))}
                        </tbody>
                    </Table>
                </Col>
            </Container>
        </div>
            )
        }
        
        export default EmployeesList;
        
