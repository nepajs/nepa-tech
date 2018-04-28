import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Main = ({ children }) => <StyledMain>{children}</StyledMain>

const StyledMain = styled.section``

Main.propTypes = {
  children: PropTypes.node
}

export default Main
