import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Paragraph = ({ children }) => <StyledText>{children}</StyledText>

const StyledText = styled.p`
  font-size: 1.1em;
  margin: 25px auto;
`

Paragraph.propTypes = {
  children: PropTypes.node
}

export default Paragraph
