import React from "react";

import List from "../../Components/List/List";

const Home = ({ data }) => {
  return (
    <div className="container">
      <h1>LIST PRODUCTS</h1>
      <List data={data} />
    </div>
  );
};

export default Home;
