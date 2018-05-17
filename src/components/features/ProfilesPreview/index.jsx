import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { Button, Profile, Section } from '../../common'

class ProfilePreview extends Component {
  constructor() {
    super()
    this.state = {
      profilesUrl: 'https://jsonplaceholder.typicode.com/users',
      profiles: null
    }

    this.handleClick = this.handleClick.bind()
  }

  async componentDidMount() {
    /* Demo only code */
    const res = await fetch(this.state.profilesUrl)
    const json = await res.json()
    this.setState({ profiles: json.slice(0, 5) })
  }

  handleClick() {
    console.log('Clicked!')
  }

  render() {
    const { profiles } = this.state

    return (
      <Section title="Meet NEPA's biggest rockstars">
        <StyledContainer>
          {profiles ? (
            <Fragment>
              {profiles.map(profile => (
                <Profile key={profile.id} {...profile} />
              ))}
              <Button handleClick={this.handleClick}>And more...</Button>
            </Fragment>
          ) : (
            <LoadingArea />
          )}
        </StyledContainer>
      </Section>
    )
  }
}

const StyledContainer = styled.div`
  /* display */
  display: flex;
  flex-wrap: wrap;
  /* box */
  width: 100%;
`

const LoadingArea = styled.div``

export default ProfilePreview
