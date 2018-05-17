import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'

import { Button } from '../../common'

const CallToAction = ({ text, label, url, ...rest }) => {
  const handleClick = () => navigateTo(url)
  return (
    <StyledContainer {...rest}>
      {text}
      <Button handleClick={handleClick}>{label}</Button>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* box */
  padding: 5%;
`

CallToAction.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string
}

export default CallToAction
