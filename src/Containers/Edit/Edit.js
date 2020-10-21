import React from "react";
import PropTypes from "prop-types";

import Tooltip from "@material-ui/core/Tooltip";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

import { fixDate, colorsPriority } from "../../vars";

import "./Edit.css";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 320,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const Edit = ({ data }) => {
  const initialState = { id: Date.now(), nameProduct: "", priority: 1, date: { created: Date.now(), edit: null }, status: true };

  const inputHeandle = ({ target }, id) => {
    data.setListProducts(data.listProducts.map((item) => (item.id === id ? { ...item, [target.name]: target.name === "priority" ? Number(target.value) : target.value, date: { ...item.date, edit: Date.now() } } : item)));
  };

  const addItem = () => {
    data.setListProducts([...data.listProducts, { ...initialState, date: { ...initialState.date, edit: Date.now() } }]);
  };

  return (
    <div className="editPage">
      <Button variant="contained" color="primary" onClick={addItem} type="submit">
        ADD PRODUCT
      </Button>
      {data.listProducts.length > 0 && (
        <ul className="editPage__list">
          <li className="editPage__item">
            <h4>Name product</h4>
            <h4>Set prioritet</h4>
            <h4 className="editPage__title-center">Have?</h4>
            <h4 className="editPage__title-center">Delete</h4>
            <h4 className="editPage__title-center">Info</h4>
          </li>
          {data.listProducts.map((item) => (
            <li key={item.id} className="editPage__item">
              <input className="editPage__item-input" value={item.nameProduct} type="text" name="nameProduct" onChange={(e) => inputHeandle(e, item.id)} placeholder="Назва"></input>
              <select className="editPage__item-input" name="priority" onChange={(e) => inputHeandle(e, item.id)} value={item.priority}>
                <option style={{ backgroundColor: colorsPriority[1] }}>1</option>
                <option style={{ backgroundColor: colorsPriority[2] }}>2</option>
                <option style={{ backgroundColor: colorsPriority[3] }}>3</option>
                <option style={{ backgroundColor: colorsPriority[4] }}>4</option>
                <option style={{ backgroundColor: colorsPriority[5] }}>5</option>
              </select>
              <Checkbox checked={item.status} color="primary" inputProps={{ "aria-label": "secondary checkbox" }} onChange={(e) => data.itemDisabled(item.id)} className="editPage__item-checked" />
              <Button variant="contained" color="secondary" onClick={() => data.deleteProduct(item.id)}>
                DELETE
              </Button>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <p className="listProducts__options-info">
                      <b>Created</b>: {fixDate(item.date.created)}
                    </p>
                    <p className="listProducts__options-info">
                      <b>Last edit</b>: {fixDate(item.date.edit)}
                    </p>
                  </React.Fragment>
                }
              >
                <Button>
                  <InfoIcon />
                </Button>
              </HtmlTooltip>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Edit;

Edit.propTypes = {
  data: PropTypes.object.isRequired,
};
