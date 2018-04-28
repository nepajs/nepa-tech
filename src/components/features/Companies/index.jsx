import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'

import { CompanyLogo, Section } from '../../common'

class Companies extends PureComponent {
  constructor() {
    super()
    this.state = {
      companiesUrl: 'https://jsonplaceholder.typicode.com/photos',
      companies: null
    }

    this.renderCompanies = this.renderCompanies.bind()
  }

  async componentDidMount() {
    const res = await fetch(this.state.companiesUrl)
    const json = await res.json()
    this.setState({ companies: json.slice(0, 4) })
  }

  renderCompanies(companies) {
    return companies ? (
      companies.map(company => (
        <CompanyLogo
          key={company.id}
          {...company}
          thumbnailUrl="https://placekitten.com/200/50"
        />
      ))
    ) : (
      <Fragment />
    )
  }

  render() {
    const { companies } = this.state

    return (
      <Section>
        <h2>Companies</h2>
        {this.renderCompanies(companies)}
      </Section>
    )
  }
}

export default Companies
