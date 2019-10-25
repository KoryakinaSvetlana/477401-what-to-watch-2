import React from "react";
import PropTypes from 'prop-types';

const Card = ({film, onHeaderClick}) => (
  <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src="https://via.placeholder.com/280x175" alt={film} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title" onClick={onHeaderClick}>
      <a className="small-movie-card__link" href="movie-page.html">{film}</a>
    </h3>
  </article>
);

Card.propTypes = {
  film: PropTypes.string.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default Card;

