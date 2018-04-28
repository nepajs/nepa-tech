import React from 'react'
import Section from './index'

it('renders without crashing (smoke test)', () => {
  shallow(<Section>Child</Section>)
})
