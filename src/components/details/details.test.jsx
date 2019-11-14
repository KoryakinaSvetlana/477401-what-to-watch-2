import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter as Router, Route} from "react-router-dom";
import Details from "./details";

it(`Details correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <Router><Details films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]} /></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Test routing`, () => {
  const tree = renderer.create(
      <Router initialEntries={[`/films/1`]}> /* Здесь мы задаем маршрут, с которого хотим начать */
        <Route
          path={`/films/:id`}
          render={(props) => (
            <Details
              {...props}
              films={[
                {
                  id: 1,
                  name: `The Grand Budapest Hotel`,
                  posterImage: `/img/the-grand-budapest-hotel-poster.jpg`,
                  previewImage: `/img/the-grand-budapest-hotel.jpg`,
                  backgroundImage: `/img/the-grand-budapest-hotel-bg.jpg`,
                  backgroundColor: `#ffffff`,
                  videoLink: `https://some-link`,
                  previewVideoLink: `https://some-link`,
                  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
                  rating: 8.9,
                  scoresCount: 240,
                  director: `Wes Andreson`,
                  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
                  runTime: 99,
                  genre: `Comedy`,
                  released: 2014,
                  isFavorite: false,
                },
                {
                  id: 2,
                  name: `Die Hard`,
                  posterImage: `/img/the-grand-budapest-hotel-poster.jpg`,
                  previewImage: `/img/the-grand-budapest-hotel.jpg`,
                  backgroundImage: `/img/the-grand-budapest-hotel-bg.jpg`,
                  backgroundColor: `#ffffff`,
                  videoLink: `https://some-link`,
                  previewVideoLink: `https://some-link`,
                  description: `The first film begins on Christmas Eve when McClane comes to reunite with separated wife Holly (Bonnie Bedelia) in Los Angeles at her company's Christmas party.`,
                  rating: 9,
                  scoresCount: 240,
                  director: `John McTiernan`,
                  starring: [`Bruce Willis`, `Samuel L. Jackson`],
                  runTime: 99,
                  genre: `Comedy`,
                  released: 2014,
                  isFavorite: false,
                },
                {
                  id: 3,
                  name: `Bohemian Rhapsody`,
                  posterImage: `/img/the-grand-budapest-hotel-poster.jpg`,
                  previewImage: `/img/the-grand-budapest-hotel.jpg`,
                  backgroundImage: `/img/the-grand-budapest-hotel-bg.jpg`,
                  backgroundColor: `#ffffff`,
                  videoLink: `https://some-link`,
                  previewVideoLink: `https://some-link`,
                  description: `biographical drama film about Freddie Mercury`,
                  rating: 8.9,
                  scoresCount: 240,
                  director: `Bryan Singer`,
                  starring: [`Rami Malek`, `Gwilym Lee`],
                  runTime: 99,
                  genre: `Comedy`,
                  released: 2018,
                  isFavorite: true,
                }
              ]}
            />
          )}
        />
      </Router>
  );

  expect(tree).toMatchSnapshot();

});
