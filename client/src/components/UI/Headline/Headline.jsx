import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({ element }) => {
  return (
    <div>
      <h1> {element} not found! </h1>
    </div>
  )
}

Headline.propTypes = {
  element: PropTypes.string.isRequired,
}

Headline.defaultProps = {
  element: 'Posts',
}

export default Headline
