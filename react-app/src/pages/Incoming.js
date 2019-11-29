import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import IncomingList from "../components/Incoming/IncomingList";
import Sender from "../components/Incoming/Sender";

const Incoming = () => {
    const [id, setID] = useState(1);
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    const incoming = [{ id: 1, name: 'Nike, Inc' }, { id: 2, name: 'Supreme' }];
    return (
        <Layout 
        list={<IncomingList incoming={incoming} setID={setID} />} 
        activeItem={<Sender sender={incoming.find(incoming => incoming.id == id)} />} 
        />
    )
}

export default Incoming;