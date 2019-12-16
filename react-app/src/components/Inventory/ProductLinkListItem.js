import React from "react";
import linkListItemStyles from "../../styles/listlink.module.css";
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from "react-router-dom";

const ProductLinkListItem = ({ item, type }) => {
    console.log(item);
  const path = "/" + type + "/";
  const history = useHistory();

  if (type === "warehouse") {
    return (
      <Link to={`${path + item}`}>
          <Button variant="dark" className={linkListItemStyles.location}>
            <div className={linkListItemStyles.itemText}>{item}</div>
          </Button>
      </Link>
    );
  } else {
    return (
      <tr
        onClick={() => {
          history.push(path + item.id);
        }}
      >
        <td>{item.id}</td>
        <td>{item.name}</td>
      </tr>
    );
  }
};

export default ProductLinkListItem;
