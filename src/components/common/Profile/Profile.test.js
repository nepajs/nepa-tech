import React from 'react'
import Profile from './index'

it('renders without crashing (smoke test)', () => {
  shallow(<Profile name="test" />)
})
