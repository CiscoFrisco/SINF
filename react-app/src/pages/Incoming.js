import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import IncomingList from "../components/Incoming/IncomingList";
import Sender from "../components/Incoming/Sender";

const Incoming = ({general}) => {
    const [id, setID] = useState(1);
    const history = useHistory();

    // if(!utils.loggedIn())
    //     history.push("/login");

    const incoming = [{ id: 1, name: 'Nike, Inc', wh_name:'Las Vegas', wh_id:1}, { id: 2, name: 'Supreme', wh_name:'New York',  wh_id:2}];
    return (
        <Layout 
        list={<IncomingList incoming={incoming} setID={setID} general={general} />} 
        activeItem={<Sender sender={incoming.find(incoming => incoming.id == id)} general={general} />} 
        />
    )
}

export default Incoming;