import React from 'react'
import MyComponent from '../Section'

it('renders without crashing (smoke test)', () => {
  shallow(<MyComponent>Child</MyComponent>)
})
