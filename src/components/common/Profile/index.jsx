import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Profile = props => (
  <StyledContainer>
    <img src={`${props.imageUrl}`} />
    <p>{props.name}</p>
  </StyledContainer>
)

const StyledContainer = styled.article``

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  imageUrl: PropTypes.string,
  phone: PropTypes.string,
  city: PropTypes.string,
  website: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string
  })
}

Profile.defaultProps = {
  imageUrl: 'https://www.fillmurray.com/150/150'
}

export default Profile
