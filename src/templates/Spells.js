import React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "../components/breadcrumbs"
import Field from "../components/field"
import BlockField from "../components/block-field"

function spellType(node) {
  const school = node.school.name
  switch (node.level) {
    case -1:
    case 0:
      return `${school} Cantrip`
    case 1:
      return `1st Level ${school}`
    case 2:
      return `2nd Level ${school}`
    case 3:
      return `3rd Level ${school}`
    default:
      return `${node.level}th Level ${school}`
  }
}

Spells.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Spells({ pageContext: node, location }) {
  return (
    <>
      <Breadcrumb location={{ pathname: "/spells" }} title="Spells" />
      <Breadcrumb location={location} title={node.name} />
      <h1 className="resource-page-header">{node.name}</h1>

      <div className="resource-content">
        <h2 className="inline-block">{spellType(node)}</h2>
        {" - "}
        <h3 className="inline-block">
          {node.classes.map(c => c.name).join(", ")} ({node.page})
        </h3>
      </div>

      <div className="inline-block mb-6">
        <div className="cf">
          <div className="mt-3 flex flex-wrap">
            <Field label="Casting Time">{node.casting_time}</Field>
            <Field label="Range">{node.range}</Field>
            <Field label="Components">
              {node.components.join(", ")}{" "}
              {node.material && <>({node.material})</>}
            </Field>
            <Field label="Ritual">
              <span className="capitalize">{node.ritual}</span>
            </Field>
            <Field label="Duration">{node.duration}</Field>
          </div>
        </div>
      </div>

      <BlockField label="Description">
        {Array.isArray(node.desc)
          ? node.desc.map((desc, index) => <p key={index}>{desc}</p>)
          : node.desc}
      </BlockField>

      <BlockField label="Higher Levels">
        {node.higher_level &&
          node.higher_level.map((desc, index) => <p key={index}>{desc}</p>)}
      </BlockField>
    </>
  )
}
