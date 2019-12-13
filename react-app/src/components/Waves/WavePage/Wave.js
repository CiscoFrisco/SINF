import React, { useState, useEffect } from "react";
import wavesStyles from "../../../styles/wavesPage.module.css";
import ItemOrder from "./ItemOrder";
import scrollStyles from "../../../styles/scroll.module.css";
import classNames from "classnames";
import { Row, Col, Button, Table } from "react-bootstrap";
import defaultImg from "../../../assets/profile_pics/default.png";

const Wave = ({ wave }) => {
  const [disabled, setDisabled] = useState(true);
  const [inventory, setInventory] = useState(wave.productList);

  const setChecked = (id, checked) => {
    setInventory(inventory.map(item => item.id === id ? { ...item, completed: !item.completed } : item))

    fetch('/api/waves/check', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: wave.wave_id,
        item_id: id,
        completed: checked
      })
    });
  }

  useEffect(() => {
    let allCompleted = true;
    inventory.forEach(item => {
      if (!item.completed)
      allCompleted = false;
    })

    if (allCompleted)
      setDisabled(false);
    else
      setDisabled(true);
  }, inventory)

  return (
    <div className={wavesStyles.wavesInfoContainer}>
      <div className={wavesStyles.size}>
        <Row className={wavesStyles.separator}>
          <h3>Wave - {wave.wave_id}</h3>
        </Row>
        <Row className={classNames(wavesStyles.separator, wavesStyles.center)}>
          <Col className={wavesStyles.nopadding} md="2">
            <img
              className={wavesStyles.userImg}
              src={defaultImg}
              alt="product"
            />
          </Col>
          <Col md="6">
            <h4 className={wavesStyles.infoTitles}>Employee Assigned</h4>
            <p>{wave.emp_name}</p>
          </Col>
          <Col>
            <Button variant="dark" disabled={disabled}> Complete</Button>
          </Col>
        </Row>
        <Row className={classNames(wavesStyles.title, wavesStyles.padding_top)}>
          <h4>Product List</h4>
        </Row>
        <Table className={classNames(scrollStyles.scroll)} style={{ marginTop: '5%' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name </th>
                <th>Quantity</th>
                <th>Section</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <ItemOrder key={item.id} item={item} setChecked={setChecked}/>
              ))}{" "}
            </tbody>
          </Table>

      </div>
    </div>
  );
};

export default Wave;
