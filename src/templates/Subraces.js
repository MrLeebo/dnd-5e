import React from "react"
import PropTypes from "prop-types"

Subraces.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default function Subraces({ pageContext }) {
  const { name } = pageContext

  return (
    <>
      <h1>{name}</h1>
    </>
  )
}
