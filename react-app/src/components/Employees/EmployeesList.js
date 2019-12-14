import React from "react";
import employeeListStyles from '../../styles/list.module.css';
import {Row, Col, Container, Table} from 'react-bootstrap/';
import EmployeeItem from './EmployeeItem';


const EmployeesList = ({ employees, setID }) => {

    return (
        <div>
            <Container className={employeeListStyles.container}>
                <Col >
                    <Row className={employeeListStyles.title}>
                        <h3>Employees</h3>
                    </Row>
                    <Table style={{marginTop: '5%'}} hover>
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
        
