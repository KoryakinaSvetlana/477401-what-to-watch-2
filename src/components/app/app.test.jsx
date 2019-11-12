import React from "react";
import renderer from "react-test-renderer";
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from "./app.jsx";
import Details from "components/details/details";
import NotFound from "components/not-found/not-found";

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


it(`invalid path should redirect to NotFound page`, () => {
  const wrapper = mount(
      <MemoryRouter initialEntries={[`/random`]}>
        <App films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]}/>
      </MemoryRouter>
  );
  expect(wrapper.find(Details)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(1);
});


it(`details page`, () => {
  const wrapper = mount(
      <MemoryRouter initialEntries={[`/films/1`]}>
        <App films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]}/>
      </MemoryRouter>
  );
  expect(wrapper.find(Details)).toHaveLength(1);
  expect(wrapper.find(NotFound)).toHaveLength(0);
});
