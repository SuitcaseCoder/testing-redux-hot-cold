import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />'), ()=> {
  it('Renders without crashing', ()=>{
    shallow(<Feedback />);
  });
});

it('renders some feedback', ()=> {
  let TEST_FEEDBACK = `you're listening to a game`;

  let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
  expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
})
