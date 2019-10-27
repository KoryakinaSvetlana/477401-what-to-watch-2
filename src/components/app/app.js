import React from "react";
import FilmList from "../film-list/film-list.js";

import films from "../../mock/films.js";

const App = () => (
  <FilmList
    films={films}
  />
);

export default App;
