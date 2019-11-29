import React from "react";
import Toolbar from '../Toolbar/Toolbar';
import layoutStyles from '../../styles/layout.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';

const Layout = ({list, activeItem}) => {
    return (
        <div>
            <Toolbar />
            <Row className={layoutStyles.rowContainer}>
                <Col className={layoutStyles.colContainer}>
                    {list}
                </Col>
                <Col className={classNames(layoutStyles.colContainer, layoutStyles.infoContainer)}>
                    {activeItem}
                </Col>
            </Row>
        </div >
    )
}

export default Layout;

