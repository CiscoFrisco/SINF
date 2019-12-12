import React, { useState } from "react";
import {Row, Col} from 'react-bootstrap';
import employeeStyles from '../../styles/employee.module.css';
import WavesList from '../Waves/WavesList';
import classNames from 'classnames';

const Employee2 = ({ employee }) => {

    const waves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    return (
        <div className={employeeStyles.employeeInfoContainer}>
            <Col md={{ span: 10, offset: 1 }}>
                <Row className={classNames(employeeStyles.separator, employeeStyles.inline)}>
                    <h3>{employee.id} - {employee.email}</h3>
                </Row>
                <Row className={classNames(employeeStyles.separator, employeeStyles.infoTitles2)}>
                    <h4>Assigned Waves</h4>
                    <WavesList waves={waves} />
                </Row>
            </Col>
        </div >
    )
}

export default Employee2;

