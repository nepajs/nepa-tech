import React from 'react'
import Button from './index'

it('renders without crashing (smoke test)', () => {
  const handleClick = () => () => {}
  shallow(<Button onClick={handleClick}>Child</Button>)
})
