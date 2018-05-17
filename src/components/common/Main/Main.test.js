import React from 'react'
import MyComponent from '../Main'

it('renders without crashing (smoke test)', () => {
  shallow(<MyComponent>Child</MyComponent>)
})
