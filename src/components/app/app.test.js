import React from "react";
import renderer from "react-test-renderer";
import App from "./app.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <App
        films={[`1`, `2`, `3`]}
        onHeaderClick={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
