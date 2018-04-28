import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CompanyLogo = props => (
  <StyledContainer>
    <a href={`${props.url}`}>
      <img src={`${props.thumbnailUrl}`} />
    </a>
  </StyledContainer>
)

const StyledContainer = styled.div``

CompanyLogo.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  screenReader: PropTypes.string
}

export default CompanyLogo
