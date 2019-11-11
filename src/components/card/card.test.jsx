import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import Card from "./card";

it(`Card correctly renders`, () => {
  const tree = renderer.create(
      <Router>
        <Card
          film={{id: 1, name: `1`}}
          onHover={() => {}}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
