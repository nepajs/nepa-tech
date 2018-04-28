import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class NavBar extends PureComponent {
  constructor() {
    super()
    this.state = {
      logo: <p>Image</p>
    }
  }

  componentDidMount() {
    const { logoUrl } = this.props
    const logo = <img src={`${this.props.logoUrl}`} />
    this.setState({ logo })
  }

  render() {
    const { logo } = this.state

    return (
      <StyledNav>
        <Link to="/">{logo}</Link>
        <Link to="/example">Example</Link>
        <Link to="/meetup">Meetup</Link>
        <Link to="/profiles">Profiles</Link>
        <Link to="/404">404</Link>
      </StyledNav>
    )
  }
}

const StyledNav = styled.nav`
  /* display */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* text */
  font-size: 0.8em;
`

NavBar.propTypes = {
  logoUrl: PropTypes.string.isRequired
}

export default NavBar
