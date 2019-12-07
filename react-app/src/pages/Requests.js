import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import RequestsList from "../components/Requests/RequestsList";
import Sender from "../components/Requests/Sender";

const Requests = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    const requests = [{ id: 1, name: 'Nike, Inc', date:'07-12-2019'}, { id: 2, name: 'Supreme', date:'17-02-2019'}];
    return (
        <Layout 
        list={<RequestsList requests={requests} setID={setID}/>} 
        activeItem={<Sender sender={requests.find(requests => requests.id == id)}/>} 
        />
    )
}

export default Requests;