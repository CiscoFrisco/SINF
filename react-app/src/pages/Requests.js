import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import RequestList from "../components/Requests/RequestList";
import Request from "../components/Requests/Request";

const Requests = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    const requests = [{id:1}, { id: 2}];
    return (
        <Layout 
        list={<RequestList requests={requests} setID={setID} />} 
        activeItem={<Request request={requests.find(request => request.id == id)} />} 
        />
    )
}

export default Requests;