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
  /* box */
  margin-bottom: 0;
  /* content */
  font-size: 3em;
  font-weight: bold;
  text-align: center;
`

const StyledTagline = styled.p`
  /* box */
  margin-top: 0;
  /* content */
  font-family: ${({ theme }) => theme.fontSecondary};
  text-align: center;
`

Title.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string
}

export default Title
