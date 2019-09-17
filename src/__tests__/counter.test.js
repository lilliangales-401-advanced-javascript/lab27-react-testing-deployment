import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';


describe("<Counter />", () => {
  it('counter is rendered on the DOM', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBe(true);
    expect(typeof app.find('span').text()).toEqual('string');
  });
  it('the state should decrement when you click the - link', () => {
    let app = shallow(<Counter />);
    let link = app.find('.down-clicker')
    link.simulate('click');
    expect(app.state('count')).toBe(-1);
  });
  it('the state should increment when you click the + link', () => {
    let app = shallow(<Counter />);
    let link = app.find('.up-clicker')
    link.simulate('click');
    expect(app.state('count')).toBe(1);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Counter page="http://www.facebook.com">Facebook</Counter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});