import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FilmList from "../film-list/film-list.jsx";
import Details from "../details/details.jsx";
import NotFound from "../not-found/not-found.jsx";

const getPage = (films) => {
  return (
    <Switch>
      <Route exact path='/' render={() => <FilmList films={films} />}/>
      <Route path='/films/:id' component={Details}/>
      <Route path='/' component={NotFound}/>
    </Switch>
  );
};

const App = ({films}) => {
  return <Router>{getPage(films)}</Router>;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    previewImage: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default App;


