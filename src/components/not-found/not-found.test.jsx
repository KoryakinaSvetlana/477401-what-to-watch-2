import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import NotFound from "./not-found.jsx";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Router><NotFound /></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
