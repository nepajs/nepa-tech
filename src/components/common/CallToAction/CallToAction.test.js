import React from 'react'
import CallToAction from './index'

it('renders without crashing (smoke test)', () => {
  shallow(<CallToAction text="test" label="test" url="test" />)
})
