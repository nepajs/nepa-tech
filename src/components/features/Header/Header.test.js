import React from 'react'
import Header from '../Header'

it('renders correctly', () => {
  const tree = shallow(<Header />)
  expect(toJson(tree)).toMatchSnapshot()
})
