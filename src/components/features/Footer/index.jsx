import React, { PureComponent } from 'react'
import styled from 'styled-components'

class Footer extends PureComponent {
  render() {
    return (
      <StyledFooter>
        <p>Footer</p>
      </StyledFooter>
    )
  }
}

const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 30vh;
  /* Extends footer to bottom of screen */
  box-shadow: 0 50vh 0 50vh ${({ theme }) => theme.colors.black};
`

export default Footer
