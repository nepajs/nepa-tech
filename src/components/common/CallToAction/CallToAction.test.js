import React from 'react'
import MyComponent from '../CallToAction'

it('renders without crashing (smoke test)', () => {
  shallow(<MyComponent text="test" label="test" url="test" />)
})
