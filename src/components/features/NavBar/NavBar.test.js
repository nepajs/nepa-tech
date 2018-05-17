import React from 'react'
import MyComponent from '../NavBar'

it('renders without crashing (smoke test)', () => {
  shallow(<MyComponent logoUrl="test" />)
})
