import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import RequestsList from "../components/Requests/RequestsList";
import Sender from "../components/Requests/Sender";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';

const Requests = () => {
    const {url_id} = useParams();
    const [id, setID] = useState(url_id);
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    document.title = "Requests | OurApp";


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
            if(!data.filter(request => request.id === url_id).length > 0){
                setID(data[0]["id"]);
                history.push("/requests/" + data[0]["id"]);
            }
            setRequests(data);
            setIsLoading(false);
        })
        .catch(console.log);
    },[]);

    return (isLoading ? <Layout></Layout> :
        ( requests.length > 0 ? (
        <Layout 
        list={<RequestsList requests={requests} setID={setID}/>} 
        activeItem={<Sender sender={requests.find(requests => requests.id === id)}/>} 
        />) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>There are no requests</h1>
            </div>
        )
        )
    )
}

export default Requests;