import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import RequestsList from "../components/Requests/RequestsList";
import Sender from "../components/Requests/Sender";

const Requests = () => {
    const [id, setID] = useState(1);
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("/api/purchases/requests", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setRequests(data);
            if(isLoading)
                setID(data[0]["id"]);
            setIsLoading(false);
        })
        .catch(console.log);
    },[requests, setRequests]);

    // if(!utils.loggedIn())
    //     history.push("/login");

    //const requests = [{ id: 1, name: 'Nike, Inc', date:'07-12-2019'}, { id: 2, name: 'Supreme', date:'17-02-2019'}];
    return (isLoading ? <Layout></Layout> :
        <Layout 
        list={<RequestsList requests={requests} setID={setID}/>} 
        activeItem={<Sender sender={requests.find(requests => requests.id == id)}/>} 
        />
    )
}

export default Requests;