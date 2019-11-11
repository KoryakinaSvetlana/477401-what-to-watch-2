import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import NotFound from "./not-found";

it(`NotFound correctly render`, () => {
  const tree = renderer.create(
      <Router><NotFound /></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
