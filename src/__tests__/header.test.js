import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/header/header.js';


describe("<Header />", () => {
  it('is rendered at application start', () => {
    let app = shallow(<Header />);
    expect(app.find('#head').exists()).toBe(true);
    expect(app.find('h1').text()).toEqual("Our Awesome Header");
  });
});