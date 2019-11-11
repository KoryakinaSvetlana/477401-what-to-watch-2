import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import FilmList from "./film-list";

it(`FilmList correctly render`, () => {
  const tree = renderer.create(
      <Router>
        <FilmList
          films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

