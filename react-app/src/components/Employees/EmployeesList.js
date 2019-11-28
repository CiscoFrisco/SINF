import React from "react";
import employeeListStyles from '../../styles/list.module.css';
import scrollStyles from '../../styles/scroll.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import EmployeeItem from './EmployeeItem';

const EmployeesList = ({ employees, setID }) => {

    return (
        <div>
            <Container className={employeeListStyles.container}>
                <Col >
                    <Row className={employeeListStyles.title}>
                        <h3>Employees</h3>
                    </Row>
                    <Row className={employeeListStyles.header}>
                        <Col md="3">
                            <h4>ID</h4>
                        </Col>
                        <Col md="9">
                            <h4>Name</h4>
                        </Col>
                    </Row>
                    <Col className={scrollStyles.scroll}>
                        {employees.map(employee => (<EmployeeItem employee={employee} setID={setID} />))}
                    </Col>
                </Col>
            </Container>
        </div>
    )
}

export default EmployeesList;

