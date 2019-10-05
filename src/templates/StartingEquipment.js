import React from "react"
import PropTypes from "prop-types"

StartingEquipment.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default function StartingEquipment({ pageContext }) {
  const { class: klass } = pageContext

  return (
    <>
      <h1>{klass.name} Starting Equipment</h1>
    </>
  )
}
