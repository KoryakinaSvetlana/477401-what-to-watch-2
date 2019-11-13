import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Details from "./details";

it(`Details correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Router><Details films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]} /></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Test routing`, () => {
  const tree = renderer.create(
      <Router initialEntries={[`/films/1`]}> /* Здесь мы задаем маршрут, с которого хотим начать */
        <Route
          path={`/films/:id`}
          render={(props) => (
            <Details
              {...props}
              films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]}
            />
          )}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();

});
