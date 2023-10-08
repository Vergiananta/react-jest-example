import React from 'react';
import { render, shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<B />', () => {
  let B;
  let makeShallowSubject;
  let makeSubject;

  beforeEach(() => {
    B = require('../B').default;

    makeShallowSubject = () => shallow(<B />);
    makeSubject = () => mount(<B />);
  });

  it('should match shallow snapshot', () => {
    const subject = makeShallowSubject();

    expect(subject.html()).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const subject = makeSubject();

    expect(subject.html()).toMatchSnapshot();
  });
});