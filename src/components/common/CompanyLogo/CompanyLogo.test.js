import React from 'react'
import CompanyLogo from './index'

it('renders without crashing (smoke test)', () => {
  shallow(<CompanyLogo thumbnailUrl="test" url="test" />)
})
