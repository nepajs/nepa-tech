import React from 'react'
import MyComponent from '../Button'

it('renders without crashing (smoke test)', () => {
  const mock = jest.fn()
  shallow(<MyComponent onClick={mock}>Child</MyComponent>)
})
