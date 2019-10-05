import React from "react"

function renderSave(label, value) {
  if (!value) return null
  return (
    <span key={label}>
      {label} {value > 0 ? "+" : ""}
      {value}
    </span>
  )
}

export default function SavingThrowBlock({ node }) {
  const result = [
    renderSave("Cha", node.charisma_save),
    renderSave("Con", node.constitution_save),
    renderSave("Dex", node.dexterity_save),
    renderSave("Int", node.intelligence_save),
    renderSave("Str", node.strength_save),
    renderSave("Wis", node.wisdom_save),
  ].filter(Boolean)

  return result.reduce((a, b) => (
    <>
      {a}, {b}
    </>
  ))
}
