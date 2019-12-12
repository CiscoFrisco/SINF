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
                <WavesList waves={employee.waves} />
            </Row>
        </div >
    )
}

export default Employee;

