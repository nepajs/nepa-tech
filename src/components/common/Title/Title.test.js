import React from 'react'
import Title from './index'

it('renders without crashing (smoke test)', () => {
  shallow(<Title title="test" />)
})
