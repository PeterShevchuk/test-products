import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { fixDate } from "../../App";

import "./Edit.css";
const Edit = ({ data }) => {
  const initialState = { id: Date.now(), nameProduct: "", priority: 1, date: { created: Date.now(), edit: null }, status: true, count: 1 };

  const inputHeandle = ({ target }, id) => {
    data.setListProducts(data.listProducts.map((item) => (item.id === id ? { ...item, [target.name]: target.name === "priority" || target.name === "count" ? Number(target.value) : target.value, date: { ...item.date, edit: Date.now() } } : item)));
  };

  const addItem = () => {
    data.setListProducts([...data.listProducts, { ...initialState, date: { ...initialState.date, edit: Date.now() } }]);
  };

  return (
    <div className="editPage">
      <button className="btn editPage__add" onClick={addItem} type="submit">
        ADD PRODUCT
      </button>
      {/* <List data={data} /> */}
      {data.listProducts.length > 0 && (
        <ul className="editPage__list">
          <li className="editPage__item">
            <div>Name product</div>
            <div>Count product</div>
            <div>Set prioritet</div>
            <div>Have?</div>
            <div>Delete</div>
            <div>Info</div>
          </li>
          {data.listProducts.map((item) => (
            <li key={item.id} className="editPage__item">
              <input className="editPage__item-input" value={item.nameProduct} type="text" name="nameProduct" onChange={(e) => inputHeandle(e, item.id)} placeholder="Назва"></input>
              <input className="editPage__item-input" value={item.count} type="text" name="count" onChange={(e) => inputHeandle(e, item.id)} placeholder="Кількість"></input>
              <select className="editPage__item-input" name="priority" onChange={(e) => inputHeandle(e, item.id)} value={item.priority}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <input type="checkbox" checked={item.status} onChange={(e) => data.itemDisabled(item.id)} className="editPage__item-checked" />
              <button className="btn editPage__item-del" onClick={() => data.deleteProduct(item.id)}>
                DELETE
              </button>
              <Tooltip title={`Created: ${fixDate(item.date.created)}, Last edit: ${fixDate(item.date.edit)}`}>
                <IconButton>
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="20px" height="20px">
                    <path d="M64,122c32,0,58-26,58-58S96,6,64,6S6,32,6,64S32,122,64,122z M64,12c28.7,0,52,23.3,52,52s-23.3,52-52,52S12,92.7,12,64 S35.3,12,64,12z" />
                    <circle cx="64" cy="39" r="9" />
                    <path d="M64,101c5,0,9-4,9-9V68c0-5-4-9-9-9s-9,4-9,9v24C55,97,59,101,64,101z" />
                  </svg>
                </IconButton>
              </Tooltip>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Edit;
