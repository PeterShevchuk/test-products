import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Edit from "./Containers/Edit/Edit";
import Home from "./Containers/Home/Home";
import Menu from "./Components/Menu/Menu";

import nav, { status } from "./vars";

import "./App.css";

export const initialState = localStorage.getItem("ListProducts") ? JSON.parse(localStorage.getItem("ListProducts")) : [];

function App() {
  const [listProducts, setListProducts] = useState(initialState);
  const [showProducts, setShowProducts] = useState(status[0]);
  const sortListProduct = () => listProducts.sort((a, b) => (a.priority - b.priority !== 0 ? a.priority - b.priority : a.nameProduct.localeCompare(b.nameProduct)));
  const data = {
    listProducts,
    setListProducts,
    setShowProducts,
    deleteProduct: (id) => setListProducts(listProducts.filter((item) => item.id !== id)),
    itemDisabled: (id) => setListProducts(listProducts.map((item) => (item.id === id ? { ...item, date: { ...item.date, edit: Date.now() }, status: !item.status } : item))),
    filterProducts: () => {
      switch (showProducts) {
        case status[0]:
          return sortListProduct();
        case status[1]:
          return sortListProduct().filter((item) => !item.status);
        case status[2]:
          return sortListProduct().filter((item) => item.status);
        default:
          return sortListProduct();
      }
    },
  };

  useEffect(() => {
    localStorage.setItem("ListProducts", JSON.stringify(listProducts));
  }, [listProducts]);
  return (
    <Router>
      <header className="container">
        <Menu />
      </header>
      <main className="container">
        <Switch>
          <Route path={nav.edit}>
            <Edit data={data} />
          </Route>
          <Route path={nav.home} exact>
            <Home data={data} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
