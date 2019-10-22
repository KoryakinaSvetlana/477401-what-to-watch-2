import React from "react";
import PropTypes from 'prop-types';
import Main from '../Main/main.js';

const App = ({films}) => (
  <Main films={films} />
);

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
