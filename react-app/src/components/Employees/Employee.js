import React, {useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import employeeStyles from '../../styles/employee.module.css';
import user from '../../assets/profile_pics/default.png';
import { MdDelete } from 'react-icons/md';
import WavesList from '../Waves/WavesList';
import classNames from 'classnames';
import Modal from 'react-bootstrap/Modal';

const Employee = ({ employee }) => {
    
    const [show, setShow] = useState(false);
    const waves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    const handleDelete = () => {
        setShow(false);
    }

    return (
        <div className={employeeStyles.employeeInfoContainer}>
            <Row className={classNames(employeeStyles.separator, employeeStyles.inline)}>
                <h3>{employee.id} - {employee.email}</h3>
                <Button variant="danger" onClick={() => setShow(true)}> <MdDelete /> Delete</Button>
            </Row>
            <Row className={classNames(employeeStyles.separator, employeeStyles.center)}>
                <Col className={employeeStyles.nopadding} md="4">
                    <img className={employeeStyles.userImg} src={user} alt="user" />
                </Col>
                <Col md="8">
                    <Row className={employeeStyles.separator}>
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
            </Row>
            <Row className={classNames(employeeStyles.separator, employeeStyles.infoTitles2)}>
                <h4>Assigned Waves</h4>
                <WavesList waves={waves} />
            </Row>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure about that?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Accept
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Employee;

