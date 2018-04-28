import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ children, handleClick, ...rest }) => (
  <StyledButton onClick={handleClick} {...rest}>
    {children}
  </StyledButton>
)

const StyledButton = styled.button``

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func
}

export default Button
