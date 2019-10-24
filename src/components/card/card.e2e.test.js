import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card';

Enzyme.configure({adapter: new Adapter()});

it(`Check click on card header`, () => {
  const clickHandler = jest.fn();
  const card = shallow(<Card // mount (<App />);
    film={`1`}
    onHeaderClick={clickHandler}
  />);

  const header = card.find(`h3`);
  header.simulate(`click`); // click on h3
  // simulate(`click`, { preventDefault() {} }) // если mount

  // const preventDefault = jest.fn();
  // header.simulate(`click`, {preventDefault});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
