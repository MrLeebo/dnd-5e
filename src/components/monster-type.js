import React from "react"
import PropTypes from "prop-types"

MonsterType.propTypes = {
  node: PropTypes.object.isRequired,
}

export default function MonsterType({ node }) {
  return (
    <>
      {node.size} {node.type}
      {node.subtype && <span> ({node.subtype})</span>}, {node.alignment}
    </>
  )
}
