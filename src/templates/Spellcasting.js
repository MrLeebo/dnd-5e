import React from "react"
import PropTypes from "prop-types"
import Field from "../components/field"
import BlockField from "../components/block-field"

Spellcasting.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default function Spellcasting({ pageContext }) {
  const { class: klass, spellcasting_ability, info } = pageContext

  return (
    <>
      <h1 className="resource-page-header">{klass.name} Spellcasting</h1>
      <div className="resource-content">
        <Field label="Spellcasting Ability">{spellcasting_ability.name}</Field>

        {info.map(({ name, desc }, index) => (
          <div key={index} className="my-4">
            <BlockField label={name}>{desc}</BlockField>
          </div>
        ))}
      </div>
    </>
  )
}
