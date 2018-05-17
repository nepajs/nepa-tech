import React from 'react'
import MyComponent from '../AboutUs'

it('renders without crashing (smoke test)', () => {
  shallow(<MyComponent title="test" description="test" />)
})
