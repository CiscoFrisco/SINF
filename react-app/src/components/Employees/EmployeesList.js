import React from "react";
import employeeListStyles from '../../styles/list.module.css';
import scrollStyle from '../../styles/scroll.module.css';
import classnames from 'classnames';
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
                    <div className={classnames(scrollStyle.scroll, employeeListStyles.scrollList70)} style={{ marginTop: '5%' }}>
                        <Table hover>
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
                    </div>
                </Col>
            </Container>
        </div>
            )
        }
        
        export default EmployeesList;
        
