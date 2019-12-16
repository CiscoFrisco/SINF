import React  from "react";
import Toolbar from '../components/Toolbar/Toolbar';
import Row from 'react-bootstrap/Row'
import homeStyles from '../styles/home.module.css'
import { Link, useHistory } from "react-router-dom";
import classNames from 'classnames';
import { connect } from "react-redux";


const Home = ({isAdmin}) => {
    console.log(isAdmin);
    const history = useHistory();
    document.title = "Home | OurApp";

    if(isAdmin ==="false"){
        console.log("entrei");
        history.push("/employee")
    }

    return (
            <div>
                <Toolbar />
                <Row className={homeStyles.row}>
                    <Link to="/employees/1">
                        <div className={classNames(homeStyles.category, homeStyles.employees)}>
                            <h4 className={ homeStyles.text}>Employees</h4>
                        </div>
                    </Link>
                    <Link to="/inventory/1">
                        <div className={classNames(homeStyles.category, homeStyles.inventory)}>
                            <h4 className={ homeStyles.text}>Inventory</h4>
                        </div>
                    </Link>
                    <Link to="/warehouse/1">
                        <div className={classNames(homeStyles.category, homeStyles.warehouse)}>
                            <h4 className={ homeStyles.text}>Warehouse</h4>
                        </div>
                    </Link>
                    <Link to="/requests/1">
                        <div className={classNames(homeStyles.category, homeStyles.requests)}>
                            <h4 className={ homeStyles.text}>Requests</h4>
                        </div>
                    </Link>
                    <Link to="/orders/1">
                        <div className={classNames(homeStyles.category, homeStyles.orders)}>
                            <h4 className={ homeStyles.text}>Orders</h4>
                        </div>
                    </Link>
                    <Link to="/waves/1">
                        <div className={classNames(homeStyles.category, homeStyles.waves)}>
                            <h4 className={ homeStyles.text}>Waves</h4>
                        </div>
                    </Link>
                </Row>
            </div >
    )
}

export default connect(({ user }) => ({ isAdmin: user.role }))(Home);

