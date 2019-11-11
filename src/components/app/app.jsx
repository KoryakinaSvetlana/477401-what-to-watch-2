import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FilmList from "components/film-list/film-list";
import Details from "components/details/details";
import NotFound from "components/not-found/not-found";

const getPage = (films) => {
  return (
    <Switch>
      <Route exact path='/' render={() => <FilmList films={films} />}/>
      <Route path='/films/:id' render={(props) => <Details {...props} films={films} />}/>
      <Route path='/' render={() => <NotFound />}/>
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


