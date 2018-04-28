import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = ({ title, tagline, ...rest }) => (
  <Fragment>
    <StyledH1 {...rest}>{title}</StyledH1>
    <StyledTagline>{tagline}</StyledTagline>
  </Fragment>
)

const StyledH1 = styled.h1`
  font-size: ${props => props.fontSize};
  margin-bottom: 0;
`

const StyledTagline = styled.p`
  font-family: ${({ theme }) => theme.fontSecondary};
  margin-top: 0;
`

Title.propTypes = {
  fontSize: PropTypes.string, // optional
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string // optional
}

export default Title
