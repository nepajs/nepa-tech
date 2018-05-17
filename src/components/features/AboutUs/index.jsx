import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Paragraph, Title, Section } from '../../common'

class AboutUs extends PureComponent {
  render() {
    const { name } = this.props
    const { title, description } = this.props

    return (
      <Section>
        <Title title={title} tagline={description} />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Paragraph>
      </Section>
    )
  }
}

AboutUs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default AboutUs
