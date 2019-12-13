import React from 'react'
import { shallow, configure } from 'enzyme'
import TrendingHashtagCard from './TrendingHashtagCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('TrendingHashtagCard component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<TrendingHashtagCard />)
    // We create an assertion within the test that checks if our component renders our name prop
  // expect(component.contains('Your name')).toBe(true)
  })
})
