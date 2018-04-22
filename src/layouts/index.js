import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from 'components/features/Header'
import theme from 'layouts/theme'

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    const { data, children } = this.props

    return (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children()}
      </Fragment>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
