import React from 'react'
import MyComponent from '../Profile'

it('renders without crashing (smoke test)', () => {
  shallow(<MyComponent name="test" />)
})
