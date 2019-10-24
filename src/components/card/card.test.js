import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Card
        film={`1`}
        onHeaderClick={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
