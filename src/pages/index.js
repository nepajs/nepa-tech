import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { Main } from '../components/common'
import {
  AboutUs,
  Companies,
  HeaderHero,
  ProfilesPreview
} from '../components/features'

class IndexPage extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <Main>
        <HeaderHero />
        <ProfilesPreview />
        <AboutUs {...data.site.siteMetadata} />
        <Companies />
      </Main>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string // optional
      })
    }).isRequired
  }).isRequired
}

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
