import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Section = ({ children }) => <StyledSection>{children}</StyledSection>

const StyledSection = styled.section``

Section.propTypes = {
  children: PropTypes.node
}

export default Section
