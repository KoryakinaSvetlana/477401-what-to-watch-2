import React from "react";
import PropTypes from 'prop-types';

const Card = ({film, onHeaderClick, onHover}) => (
  <article
    className="small-movie-card catalog__movies-card"
    onMouseOver={() => {
      onHover({target: {value: film}});
    }}>
    <div className="small-movie-card__image">
      <img src={film.previewImage} alt={film.name} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title" onClick={() => {
      onHeaderClick(film.id);
    }}>
      <a className="small-movie-card__link" href="#">{film.name}</a>
    </h3>
  </article>
);

Card.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    previewImage: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default Card;
