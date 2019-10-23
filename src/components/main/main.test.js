import React from "react";
import renderer from "react-test-renderer";
import Card from "../card/card.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <div className="catalog__movies-list">
        {[`1`, `2`, `3`].map((film, i) => (
          <Card key={`${i}_${film}`} film={film}/>
        ))}
      </div>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
