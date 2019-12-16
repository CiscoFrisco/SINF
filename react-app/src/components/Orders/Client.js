import React  from "react";
import { Row,Col,Container,Table } from "react-bootstrap/"
import clientStyles from "../../styles/client.module.css";
import classNames from "classnames";
import clientListStyles from "../../styles/list.module.css";
import scrollStyles from "../../styles/scroll.module.css";
import OrderItem from "./OrderItem";

const Client = ({ client }) => {
  const lang_options = { weekday:'long', year:'numeric', month:'long', day:'numeric'};
  const date = new Date(client.date);

  return (
    <div className={clientStyles.clientInfoContainer}>
      <Row
        className={classNames(clientStyles.separator, clientStyles.inline)}
      >
        <h3> Order - {client.id}</h3>
      </Row>
      <Row
        className={clientStyles.center}
      >
          <Col md="6" className={clientStyles.separator}>
            <Col>
              <h4 className={clientStyles.infoTitles}>Client</h4>
              <p>{client.name}</p>
            </Col>
          </Col>
          <Col md="6" className={clientStyles.separator}>
            <Col>
              <h4 className={clientStyles.infoTitles}>Date</h4>
              <p>{date.toLocaleDateString("en-US", lang_options)}</p>
            </Col>
          </Col>
      </Row>
      <Container className={clientListStyles.container}>
        <Col>
          <Row className={clientListStyles.title}>
            <h4>Product List</h4>
          </Row>
          <div className={classNames(scrollStyles.scroll, clientListStyles.scrollList45)} style={{ marginTop: "5%" }}>
            <Table hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name </th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {client.productList.map(item => (
                  <OrderItem key={item.id} item={item} />
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Client;
