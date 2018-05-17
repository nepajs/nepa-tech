import React from 'react'
import MyComponent from '../Title'

it('renders without crashing (smoke test)', () => {
  shallow(<MyComponent title="test" />)
})
