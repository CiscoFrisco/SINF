import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Employee from '../components/Employees/Employee';
import EmployeesList from '../components/Employees/EmployeesList';
import Layout from "../components/Templates/Layout";

const Employees = () => {
    const [id, setID] = useState(12);
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    const employees = [{ id: 12, name: 'Josefino', birthday:'10-05-1998'}, 
                       { id: 13, name: 'Constantino' }, 
                       { id: 14, name: 'Constantino' }, 
                       { id: 15, name: 'Constantino' },
                       { id: 16, name: 'Josefino' },
                       { id: 17, name: 'Constantino' },
                       { id: 18, name: 'Constantino' },
                       { id: 19, name: 'Constantino' },
                       { id: 20, name: 'Josefino' },
                       { id: 21, name: 'Constantino' },
                       { id: 22, name: 'Constantino' },
                       { id: 23, name: 'Constantino' }];
    return (
        <Layout 
        list={<EmployeesList employees={employees} setID={setID} />} 
        activeItem={<Employee employee={employees.find(employee => employee.id == id)} />} 
        />
    )
}

export default Employees;