import React from 'react'
import AboutUs from './index'

it('renders without crashing (smoke test)', () => {
  shallow(<AboutUs title="test" description="test" />)
})
