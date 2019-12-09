import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import Employee from '../components/Employees/Employee';
import EmployeesList from '../components/Employees/EmployeesList';
import Layout from "../components/Templates/Layout";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Employees = () => {
    const [id, setID] = useState(0);
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //const history = useHistory();

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
            setID(data[0]["id"]);
            setIsLoading(false);
        })
        .catch(console.log);
    },[]);

    return (isLoading ? <Layout></Layout> :
        (
            employees.length > 0  ?
            (
            <Layout 
            list={<EmployeesList employees={employees} setID={setID} />} 
            activeItem={<Employee employee={employees.find(employee => employee.id == id)} />} 
            />) : (
                <div>
                    <Toolbar />
                    <h1 className={styles.empty}>There are no employees</h1>
                </div>                
            )
        )
    )
}

export default Employees;