import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';


const HomeMaster = () => {
    const [employees, setEmployees] = useState({});

    useEffect(() => {
        fetch("http://localhost:3002/api/employees")
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setEmployees(data);
          })
        .catch(console.log)
    }, []);

    return (
        <Container>
            <p>{employees["ola"]}</p>
        </Container>
    )

}

export default HomeMaster;

