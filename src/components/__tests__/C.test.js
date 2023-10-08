import React from 'react';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<C />', () => {
  let C;
  let makeSubject;

  beforeEach(() => {
    C = require('../C').default;

    makeSubject = () => render(<C />);
  });

  it('should match snapshot', () => {
    const subject = makeSubject();

    expect(subject).toMatchSnapshot();
  });
});