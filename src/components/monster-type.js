import React from "react"

export default function MonsterType({ node }) {
  return (
    <>
      {node.size} {node.type}
      {node.subtype && <span> ({node.subtype})</span>}, {node.alignment}
    </>
  )
}
