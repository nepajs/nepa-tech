import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Profile, ProfilesLoading, Section } from '../../common'

class ProfilePreview extends PureComponent {
  constructor() {
    super()
    this.state = {
      profilesUrl: 'https://jsonplaceholder.typicode.com/users',
      profiles: null
    }

    this.renderProfiles = this.renderProfiles.bind()
  }

  async componentDidMount() {
    const res = await fetch(this.state.profilesUrl)
    const json = await res.json()
    this.setState({ profiles: json.slice(0, 3) })
  }

  renderProfiles(profiles) {
    return profiles ? (
      profiles.map(profile => <Profile key={profile.id} {...profile} />)
    ) : (
      <ProfilesLoading />
    )
  }

  render() {
    const { profiles } = this.state

    return (
      <Section>
        <h2>Profiles</h2>
        {this.renderProfiles(profiles)}
      </Section>
    )
  }
}

export default ProfilePreview
