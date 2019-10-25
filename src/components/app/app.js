import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.js";

const App = ({films, onHeaderClick}) => (
  <Main
    films={films}
    onHeaderClick={onHeaderClick}
  />
);

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default App;
