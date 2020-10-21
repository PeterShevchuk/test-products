import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

import { status, fixDate, colorsPriority } from "../../vars";

import nav from "../../vars";

import "./List.css";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 320,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

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
              <li key={item.id} className="listProducts__item" style={{ borderColor: colorsPriority[item.priority] }}>
                <h3>{item.nameProduct}</h3>
                <div className="listProducts__options">
                  <Checkbox checked={item.status} color="primary" inputProps={{ "aria-label": "secondary checkbox" }} onChange={() => data.itemDisabled(item.id)} className="editPage__item-checked" />
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
                        <p className="listProducts__options-info">
                          <b>Priority</b>: {item.priority}
                        </p>
                        <p className="listProducts__options-info">
                          <b>Status</b>: {item.status ? status[2] : status[1]}
                        </p>
                      </React.Fragment>
                    }
                  >
                    <Button>
                      <InfoIcon />
                    </Button>
                  </HtmlTooltip>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className="noneProducts">
          No products in list, <NavLink to={nav.edit}>please add products</NavLink>
        </h2>
      )}
    </>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.object.isRequired,
};
