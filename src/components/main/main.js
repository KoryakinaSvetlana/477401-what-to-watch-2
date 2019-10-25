import React from "react";
import PropTypes from 'prop-types';
import Card from '../card/card.js';

const Main = ({films, onHeaderClick}) => (
  <div className="catalog__movies-list">
    {films.map((film, i) => (
      <Card
        key={`${i}_${film}`}
        film={film}
        onHeaderClick={onHeaderClick}
      />
    ))}
  </div>
);

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default Main;

