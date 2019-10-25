import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Main
        films={[`1`, `2`, `3`]}
        onHeaderClick={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

