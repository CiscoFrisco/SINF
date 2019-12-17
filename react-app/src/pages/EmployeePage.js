import React, { useState, useEffect } from "react";
import Employee2 from '../components/Employees/Employee2';
import Layout from "../components/Templates/Layout";
import Toolbar from "../components/Toolbar/Toolbar";
import { connect } from "react-redux";

const EmployeePage = ({userID}) => {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/api/employees", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
                setIsLoading(false);
            })
            .catch(console.log);
    }, []);

    return (isLoading ? <Layout></Layout> :
        (
            <div>
                <Toolbar />
                <Employee2 employee={employees.find(employee => employee.id === parseInt(userID))} />
            </div>
        )
    )
}

export default connect(({ user }) => ({ userID: user.id }))(EmployeePage);