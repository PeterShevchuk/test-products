import React from "react";
import PropTypes from "prop-types";

import List from "../../Components/List/List";

const Home = ({ data }) => {
  return (
    <div className="container">
      <List data={data} />
    </div>
  );
};

export default Home;

Home.propTypes = {
  data: PropTypes.object.isRequired,
};
