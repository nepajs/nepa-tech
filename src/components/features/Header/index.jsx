import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </StyledHeader>
)

const StyledHeader = styled.header``

export default Header
