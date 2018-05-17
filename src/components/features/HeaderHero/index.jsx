import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { CallToAction } from '../../common'

class HeaderHero extends PureComponent {
  constructor() {
    super()
    this.state = {
      meetupCTA: {
        text: "Join Northeast Pennsylvania's Premier Tech Meetup",
        label: 'See Date & Times',
        url: '/meetup'
      },
      profilesCTA: {
        text: 'Chat with local experts and tech companies',
        label: 'See Who We Are',
        url: '/profiles'
      }
    }
  }
  render() {
    return (
      <StyledHeader>
        <CallToAction {...this.state.meetupCTA} />
        <CallToAction {...this.state.profilesCTA} />
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.header`
  /* display */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* box */
  min-height: 90vh;
`

export default HeaderHero
