import React from "react";
import renderer from "react-test-renderer";
import FilmList from "./film-list.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <FilmList
        films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

