import React from "react"
import PropTypes from "prop-types"

Levels.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default function Levels({ pageContext }) {
  const { class: klass, subclass, level } = pageContext

  return (
    <>
      <h1>
        {subclass ? subclass.name : ""} {klass.name} {level}
      </h1>
    </>
  )
}
