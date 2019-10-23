import React from "react";
import PropTypes from 'prop-types';
import Card from '../card/card.js';

const Main = ({films}) => (
  <div className="catalog__movies-list">
    {films.map((film, i) => (
      <Card key={`${i}_${film}`} film={film}/>
    ))}
  </div>
);

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;

