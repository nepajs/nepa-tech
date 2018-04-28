import React from 'react'
import NavBar from './index'

it('renders without crashing (smoke test)', () => {
  shallow(<NavBar logoUrl="test" />)
})
