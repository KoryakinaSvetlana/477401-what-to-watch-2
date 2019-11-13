import React from "react";
import renderer from "react-test-renderer";
import {Route} from 'react-router';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from "react-router-dom";

import App from "./app.jsx";
import NotFound from "../not-found/not-found.jsx";

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
  const wrapper = shallow(<Router><App
    films={[{id: 1, name: `1`}, {id: 2, name: `2`}, {id: 3, name: `3`}]}
  /></Router>);
  const pathMapTest = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMapTest[`/somepath`]).toBe(NotFound);
});

