import React from 'react'
import MyComponent from '../CompanyLogo'

it('renders without crashing (smoke test)', () => {
  shallow(<MyComponent thumbnailUrl="test" url="test" />)
})
