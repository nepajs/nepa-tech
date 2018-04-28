import React, { PureComponent, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Footer, NavBar } from '../components/features'
import theme from './theme'

class Layout extends PureComponent {
  render() {
    const { data, children } = this.props
    const { siteMetadata } = data.site

    return (
      <Fragment>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywordsAsCommaString }
          ]}
        />

        <ThemeProvider theme={theme}>
          <Fragment>
            <NavBar logoUrl={siteMetadata.logoUrl} />
            {children()}
            <Footer />
          </Fragment>
        </ThemeProvider>
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        logoUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywordsAsCommaString: PropTypes.string.isRequired
      })
    }).isRequired
  }).isRequired
}

export default Layout

export const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
        description
        keywordsAsCommaString
        logoUrl
      }
    }
  }
`
