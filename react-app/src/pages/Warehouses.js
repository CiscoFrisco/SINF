import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../components/Templates/Layout";

import WarehousesList from "../components/Warehouses/WarehousesList";
import Location from "../components/Warehouses/Location";

const Warehouses = () => {
  const [id, setID] = useState(1);
  const history = useHistory();

  // if(!utils.loggedIn())
  //     history.push("/login");

  const locations = [
    { id: 1, name: "Las Vegas" },
    { id: 2, name: "Estádio da Luz" }
  ];
  return (
    <Layout
      list={<WarehousesList locations={locations} setID={setID} />}
      activeItem={
        <Location location={locations.find(location => location.id == id)} />
      }
    />
  );
};

export default Warehouses;
