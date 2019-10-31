import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Check click on card header`, () => {
  const clickHandler = jest.fn();
  const card = shallow(<Card
    film={{id: 1, name: `1`}}
    onHeaderClick={clickHandler}
    onHover={() => {}}
  />);

  const header = card.find(`h3`);
  header.simulate(`click`); // click on h3

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it(`Check card mouseover`, () => {
  const mouseoverHandler = jest.fn();
  const card = shallow(<Card
    film={{id: 1, name: `1`}}
    onHeaderClick={() => {}}
    onHover={mouseoverHandler}
  />);

  const article = card.find(`article`);
  article.simulate(`mouseover`); // mouseover on article
  expect(mouseoverHandler).toHaveBeenCalledTimes(1);
});

it(`Check card mouseover with card`, () => {
  const film = {id: 1, name: `1`};
  const mouseoverHandler = jest.fn();
  const card = shallow(<Card
    film={film}
    onHeaderClick={() => {}}
    onHover={() => {
      mouseoverHandler({target: {value: film}});
    }}
  />);

  const article = card.find(`article`);

  article.simulate(`mouseover`); // mouseover on article
  expect(mouseoverHandler).toBeCalledWith({target: {value: film}});
});
