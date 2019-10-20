import React from "react";
import PropTypes from 'prop-types';

const App = ({films}) => (
  <section>
    <h1>Что посмотреть</h1>
    <ul>
      {films.map((film, i) => (
        <li key={i}>{film}</li>
      ))}
    </ul>
  </section>
);

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string),
};

export default App;
