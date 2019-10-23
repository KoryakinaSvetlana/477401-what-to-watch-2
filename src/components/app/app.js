import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.js";

const App = ({films}) => (
  <Main films={films} />
);

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
