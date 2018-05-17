import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Section = ({ children, title }) => (
  <StyledSection>
    {title && <StyledHeader>{title}</StyledHeader>}
    {children}
  </StyledSection>
)

const StyledSection = styled.section`
  margin: 10vh auto;
`
const StyledHeader = styled.h2``

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}
Section.defaultProps = {
  title: ''
}

export default Section
