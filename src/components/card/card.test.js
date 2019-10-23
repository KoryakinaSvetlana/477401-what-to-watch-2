import React from "react";
import renderer from "react-test-renderer";
import Card from "../card/card.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Card film={`1`} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
