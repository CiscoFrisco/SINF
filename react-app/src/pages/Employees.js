import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import Employee from '../components/Employees/Employee';
import EmployeesList from '../components/Employees/EmployeesList';
import Layout from "../components/Templates/Layout";

const Employees = () => {
    const [id, setID] = useState(0);
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

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
    },[employees, setEmployees]);

    return (isLoading ? <Layout></Layout> :
        <Layout 
        list={<EmployeesList employees={employees} setID={setID} />} 
        activeItem={<Employee employee={employees.find(employee => employee.id == id)} />} 
        />
    )
}

export default Employees;