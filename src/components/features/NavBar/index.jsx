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
        <LeftSide>
          <Link to="/">{logo}</Link>
        </LeftSide>
        <RightSide>
          <Link to="/example">Example</Link>
          <Link to="/meetup">Meetup</Link>
          <Link to="/profiles">Profiles</Link>
          <Link to="/404">404</Link>
        </RightSide>
      </StyledNav>
    )
  }
}

const StyledNav = styled.nav`
  /* display */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* box */
  width: 100%;
  /* text */
  font-size: 0.8em;
`

const LeftSide = styled.div`
  flex: 1;
`
const RightSide = styled.div`
  /* display */
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

NavBar.propTypes = {
  logoUrl: PropTypes.string.isRequired
}

export default NavBar
