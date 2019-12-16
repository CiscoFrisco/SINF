import React, { useState, useEffect } from "react";
import wavesStyles from "../../../styles/wavesPage.module.css";
import ItemOrder from "./ItemOrder";
import scrollStyles from "../../../styles/scroll.module.css";
import classNames from "classnames";
import { Row, Col, Button, Table } from "react-bootstrap";

const Wave = ({ wave }) => {
  const [disabled, setDisabled] = useState(true);
  const [reload, setReload] = useState(false);

  const setChecked = (id, checked) => {
    wave.productList = wave.productList.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
    setReload(!reload);

    let section_id;

    wave.productList.forEach((item) => {
        if(item.id === id)
          section_id = item.section;
    })

    fetch('/api/waves/check', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: wave.wave_id,
        item_id: id,
        completed: checked,
        section_id: section_id
      }),
    }).then(response => response.json())
      .then(data => {
        setReload(!reload);
        wave.productList = data;
      })
      .catch(console.log);
  }

  useEffect(() => {
    let allCompleted = true;
    wave.productList.forEach(item => {
      if (!item.completed)
        allCompleted = false;
    })

    if (allCompleted)
      setDisabled(false);
    else
      setDisabled(true);
  }, wave.productList)

  const completeWave = () => {
    fetch('/api/waves/completed', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: wave.wave_id,
      })
    });
  }

  return (
    <div className={wavesStyles.wavesInfoContainer}>
      <div className={wavesStyles.size}>
        <Row className={wavesStyles.separator}>
          <h3>Wave - {wave.wave_id}</h3>
        </Row>
        <Row className={classNames(wavesStyles.separator, wavesStyles.center)}>
          <Col className={wavesStyles.nopadding}  md="5">
            <h4 className={wavesStyles.infoTitles}>Employee Assigned</h4>
            <p>{wave.type}</p>
          </Col>
          <Col md={{span:4 , offset:3}}>
            <Button variant="dark" disabled={disabled} onClick={() => completeWave()}> Complete</Button>
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
            {wave.productList.map(item => (
              <ItemOrder key={item.id} item={item} setChecked={setChecked} />
            ))}
          </tbody>
        </Table>

      </div>
    </div>
  );
};

export default Wave;
