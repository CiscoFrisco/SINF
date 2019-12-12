import React, { useState, useEffect } from "react";
import wavesStyles from "../../../styles/wavesPage.module.css";
import ItemOrder from "./ItemOrder";
import scrollStyles from "../../../styles/scroll.module.css";
import classNames from "classnames";
import { Row, Col, Button } from "react-bootstrap";
import defaultImg from "../../../assets/profile_pics/default.png";

const Wave = ({ wave }) => {
  const [disabled, setDisabled] = useState(true);
  const [inventory, setInventory] = useState(wave.productList);

  const setChecked = id => {
    setInventory(inventory.map(item => item.id === id ? { ...item, checked: !item.checked } : item))
  }

  useEffect(() => {
    let allChecked = true;
    inventory.forEach(item => {
      if (!item.checked)
        allChecked = false;
    })

    if (allChecked)
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
        <Row className={wavesStyles.itemheader}>
          <Col md="10" style={{ display: "flex" }}>
            <Col md="2" style={{ marginLeft: '0.5em' }} >
              <h5>ID</h5>
            </Col>
            <Col md="5">
              <h5>Product Name</h5>
            </Col>
            <Col md="3" style={{ marginLeft: '0.2em' }}>
              <h5>Quantity</h5>
            </Col>
            <Col md="1" style={{ marginLeft: '0.3em' }}>
              <h5>Section</h5>
            </Col>
          </Col>
        </Row>
        <div className={classNames(scrollStyles.scroll, wavesStyles.scroll30)}>
          {inventory.map(item => (
            <ItemOrder item={item} setChecked={setChecked} />
          ))}{" "}
        </div>

      </div>
    </div>
  );
};

export default Wave;
