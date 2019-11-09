import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import Details from "./details.jsx";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Router><Details /></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
