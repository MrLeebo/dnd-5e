import React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "../components/breadcrumbs"
import Field from "../components/field"
import BlockField from "../components/block-field"

Races.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Races({ pageContext, location }) {
  const {
    name,
    speed,
    ability_bonuses,
    alignment,
    age,
    language_desc,
    size_description,
  } = pageContext

  return (
    <>
      <Breadcrumb location={{ pathname: "/races" }} title="Races" />
      <Breadcrumb location={location} title={name} />

      <h1 className="resource-page-header">{name}</h1>

      <div className="resource-content">
        <Field label="Speed">{speed}</Field>
        <Field label="Ability Bonuses">
          {ability_bonuses.map(ability => `${ability.name}: ${ability.bonus}`)}
        </Field>
        <BlockField label="Age">
          <p>{age}</p>
        </BlockField>
        <BlockField label="Alignment">
          <p>{alignment}</p>
        </BlockField>
        <BlockField label="Size">
          <p>{size_description}</p>
        </BlockField>
        <BlockField label="Languages">
          <p>{language_desc}</p>
        </BlockField>
      </div>
    </>
  )
}
