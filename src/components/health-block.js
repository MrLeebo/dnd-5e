import React from "react"
import PropTypes from "prop-types"

HealthBlock.propTypes = {
  node: PropTypes.object.isRequired,
}

export default function HealthBlock({ node }) {
  const bonus = Math.floor((node.constitution - 10) / 2)
  const [, dice] = /(\d+)d(\d+)/i.exec(node.hit_dice)

  return (
    <>
      {node.hit_dice}{" "}
      {(bonus && dice && (
        <>
          {bonus >= 0 ? "+ " : ""}
          {bonus * +dice}
        </>
      )) ||
        null}{" "}
      ({node.hit_points})
    </>
  )
}
