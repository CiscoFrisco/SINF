import React from "react";
import Row from 'react-bootstrap/Row'
import employeeStyles from '../../styles/employee.module.css';
import WavesList from '../Waves/WavesList';
import classNames from 'classnames';

const Employee = ({ employee }) => {
    return (
        <div className={employeeStyles.employeeInfoContainer}>
            <Row className={classNames(employeeStyles.separator, employeeStyles.inline)}>
                <h3>{employee.id} - {employee.email}</h3>
            </Row>
            <Row className={classNames(employeeStyles.separator, employeeStyles.infoTitles2)}>
                <h4>Assigned Waves</h4>
            </Row>
            <WavesList waves={employee.waves} />
        </div >
    )
}

export default Employee;

