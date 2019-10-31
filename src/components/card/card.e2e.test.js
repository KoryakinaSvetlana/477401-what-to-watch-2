import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card';

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
  const mouseoverHandler = jest.fn();
  const card = shallow(<Card
    film={{id: 1, name: `1`}}
    onHeaderClick={() => {}}
    onHover={mouseoverHandler}
  />);

  const article = card.find(`article`);

  article.simulate(`mouseover`); // mouseover on article
  expect(mouseoverHandler).toBeCalledWith({id: 1, name: `1`});
});
