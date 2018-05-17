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
  }

  async componentDidMount() {
    /* Demo-only code */
    const res = await fetch(this.state.companiesUrl)
    const json = await res.json()
    this.setState({ companies: json.slice(0, 4) })
  }

  render() {
    const { companies } = this.state

    return (
      <Section title="Companies">
        <StyledContainer>
          {companies ? (
            companies.map(company => (
              <CompanyLogo
                key={company.id}
                {...company}
                thumbnailUrl="https://placekitten.com/200/50"
              />
            ))
          ) : (
            <Fragment />
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
`

export default Companies
