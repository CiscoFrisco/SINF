import React from "react";
import Row from 'react-bootstrap/Row'
import employeeStyles from '../../styles/employee.module.css';
import WavesList from '../Waves/WavesList';
import classNames from 'classnames';

const Employee = ({ employee }) => {
    
    const waves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28];

    return (
        <div className={employeeStyles.employeeInfoContainer}>
            <Row className={classNames(employeeStyles.separator, employeeStyles.inline)}>
                <h3>{employee.id} - {employee.email}</h3>
            </Row>
            {/* <Row className={classNames(employeeStyles.separator, employeeStyles.center)}>
                <Col className={employeeStyles.nopadding} md="4">
                    <img className={employeeStyles.userImg} src={user} alt="user" />
                </Col>
                <Col md="8">
                    <Row>
                        <Col>
                            <h4 className={employeeStyles.infoTitles}>Birthday</h4>
                            <p>{employee.birthday}</p>
                        </Col>
                        <Col>
                            <h4 className={employeeStyles.infoTitles}>Gender</h4>
                            <p>{employee.gender}</p>
                        </Col>
                    </Row>
                    <Row className={classNames(employeeStyles.separator, employeeStyles.padding_l3)}>
                        <h4 className={employeeStyles.infoTitles}> First Joined the Company</h4>
                        <p>{employee.firstJoined}</p>
                    </Row>
                </Col>
            </Row> */}
            <Row className={classNames(employeeStyles.separator, employeeStyles.infoTitles2)}>
                <h4>Assigned Waves</h4>
                <WavesList waves={waves} />
            </Row>
        </div >
    )
}

export default Employee;

