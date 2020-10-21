import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { status, fixDate } from "../../vars";

import "./List.css";

const List = ({ data }) => {
  return (
    <>
      {data.listProducts.length > 0 ? (
        <>
          <div className="filterBtns">
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" onClick={(e) => data.setShowProducts(e.target.innerText)}>
              <Button>{status[0]}</Button>
              <Button>{status[1]}</Button>
              <Button>{status[2]}</Button>
            </ButtonGroup>
          </div>
          <ul className="listProducts">
            {data.filterProducts().map((item) => (
              <li key={item.id} className="listProducts__item">
                <h3>
                  (Priority: {item.priority}) {item.nameProduct} - {item.count}
                </h3>
                <div className="listProducts__options">
                  <input type="checkbox" checked={item.status} onChange={() => data.itemDisabled(item.id)} className="editPage__item-checked" />
                  <button onClick={() => data.deleteProduct(item.id)}>DELETE</button>

                  <Tooltip title={`Created: ${fixDate(item.date.created)}, Last edit: ${fixDate(item.date.edit)}`}>
                    <IconButton>
                      <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="20px" height="20px">
                        <path d="M64,122c32,0,58-26,58-58S96,6,64,6S6,32,6,64S32,122,64,122z M64,12c28.7,0,52,23.3,52,52s-23.3,52-52,52S12,92.7,12,64 S35.3,12,64,12z" />
                        <circle cx="64" cy="39" r="9" />
                        <path d="M64,101c5,0,9-4,9-9V68c0-5-4-9-9-9s-9,4-9,9v24C55,97,59,101,64,101z" />
                      </svg>
                    </IconButton>
                  </Tooltip>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className="noneProducts"> No products in list</h2>
      )}
    </>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.object.isRequired,
};
