import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.js';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleHeaderClick() {}

  handleCardHover(film) {
    this.setState({activeFilm: film});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <Card
            key={film.id}
            film={film}
            onHeaderClick={this.handleHeaderClick}
            onHover={this.handleCardHover}
          />
        ))}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    previewImage: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default FilmList;
