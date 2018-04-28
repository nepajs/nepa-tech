import React from 'react'
import Main from './index'

it('renders without crashing (smoke test)', () => {
  shallow(<Main>Child</Main>)
})
