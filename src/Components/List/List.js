import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import InfoIcon from "@material-ui/icons/Info";
import BackspaceRoundedIcon from "@material-ui/icons/BackspaceRounded";

import { nav, status, fixDate, colorsPriority, HtmlTooltip } from "../../vars";

import "./List.css";

const List = ({ data }) => {
  return (
    <>
      {data.listProducts.length > 0 ? (
        <>
          <div className="filterBtns">
            <ButtonGroup size="large" aria-label="large outlined primary button group" onClick={(e) => data.setShowProducts(e.target.innerText)}>
              {status.map((item) => (
                <Button key={item} disabled={data.showProducts === item}>
                  {item}
                </Button>
              ))}
            </ButtonGroup>
          </div>
          <ul className="listProducts">
            {data.filterProducts().length > 0 ? (
              data.filterProducts().map((item) => (
                <li key={item.id} className="listProducts__item" style={{ borderLeftColor: colorsPriority[item.priority - 1] }}>
                  <h3>{item.nameProduct}</h3>
                  <div className="listProducts__options">
                    <Checkbox checked={item.status} color="default" inputProps={{ "aria-label": "secondary checkbox" }} onChange={() => data.itemDisabled(item.id)} className="editPage__item-checked" />
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
                      <IconButton>
                        <InfoIcon />
                      </IconButton>
                    </HtmlTooltip>
                    <IconButton onClick={() => data.deleteProduct(item.id)}>
                      <BackspaceRoundedIcon />
                    </IconButton>
                  </div>
                </li>
              ))
            ) : (
              <h2 className="noneProducts">No products in list</h2>
            )}
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
