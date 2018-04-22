import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const IndexPage = () => (
  <Main>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Main>
)

const Main = styled.main``

export default IndexPage
