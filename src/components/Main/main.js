import React from "react";
import PropTypes from 'prop-types';
import Card from '../Card/card.js';

const Main = ({films}) => (
  <div className="catalog__movies-list">
    {films.map((film, i) => (
      <Card key={i} film={film}/>
    ))}
  </div>
);

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;

