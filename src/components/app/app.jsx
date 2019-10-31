import React from "react";
import PropTypes from 'prop-types';
import FilmList from "../film-list/film-list.jsx";

const App = ({films}) => (
  <FilmList
    films={films}
  />
);

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    previewImage: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default App;
