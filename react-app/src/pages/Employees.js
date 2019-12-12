import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Employee from '../components/Employees/Employee';
import EmployeesList from '../components/Employees/EmployeesList';
import Layout from "../components/Templates/Layout";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Employees = () => {
    const { url_id } = useParams();
    const [id, setID] = useState(url_id);
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

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
                if(!data.filter(employee =>employee.id == url_id).length > 0){
                    setID(data[0]["id"]);
                    history.push("/employees/" + data[0]["id"]);
                }
                setEmployees(data);
                setIsLoading(false);
            })
            .catch(console.log);
    }, []);

    return (isLoading ? <Layout></Layout> :
        (
            employees.length > 0 ?
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