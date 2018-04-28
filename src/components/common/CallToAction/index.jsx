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

const StyledContainer = styled.div``

CallToAction.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string
}

export default CallToAction
