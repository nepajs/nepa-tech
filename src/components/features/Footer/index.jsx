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
  color: white;
  background-color: navy;
`

export default Footer
