import React, { useState, useEffect } from "react";
import wavesStyles from "../../../styles/wavesPage.module.css";
import ItemOrder from "./ItemOrder";
import scrollStyles from "../../../styles/scroll.module.css";
import listStyles from "../../../styles/list.module.css";
import classNames from "classnames";
import { Row, Col, Button, Table } from "react-bootstrap";
import {connect} from "react-redux";

const Wave = ({ wave, isAdmin }) => {
  const [disabled, setDisabled] = useState(true);
  const [reload, setReload] = useState(false);

  const setChecked = (id, checked) => {
    wave.productList = wave.productList.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
    
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
        wave.productList = data;
        setReload(!reload);
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
    }).then(res => res.json())
    .then(data => {
      const redirect = isAdmin === "true" ? ("/waves/1") : ("/wave/1");
      window.location.href= redirect;
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
            <p>{wave.employee_name}</p>
          </Col>
          <Col md={{span:4 , offset:3}}>
            <Button variant="dark" disabled={disabled} onClick={() => completeWave()}> Complete</Button>
          </Col>
        </Row>
        <Row className={classNames(wavesStyles.title, wavesStyles.padding_top)}>
          <h4>Product List</h4>
        </Row>
        <div className={classNames(scrollStyles.scroll, listStyles.scrollList40)}>
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
    </div>
  );
};

export default connect(({ user }) => ({ isAdmin: user.role}))(Wave);
