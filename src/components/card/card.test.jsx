import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Card
        film={{id: 1, name: `1`}}
        onHeaderClick={() => {}}
        onHover={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
