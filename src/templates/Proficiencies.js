import React from "react"
import PropTypes from "prop-types"

Proficiencies.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default function Proficiencies({ pageContext }) {
  const { name, type, classes, races } = pageContext

  return (
    <>
      <h1>{name}</h1>
      {type}

      <div>
        {classes.map(({ name }, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>

      <div>
        {races.map(({ name }, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </>
  )
}
