import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.js';

class FilmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null,
    };

    this.handleHeaderClick = () => {};

    this.handleHoverCard = (film) => {
      this.setState({activeFilm: film});
    };
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <Card
            key={`${film.id}`}
            film={film}
            onHeaderClick={this.handleHeaderClick}
            onHover={this.handleHoverCard}
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
