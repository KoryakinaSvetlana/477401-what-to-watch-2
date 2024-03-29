import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
