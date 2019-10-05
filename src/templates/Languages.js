import React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "../components/breadcrumbs"
import Field from "../components/field"

Languages.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Languages({ pageContext: node, location }) {
  const { name, type, typical_speakers, script } = node

  return (
    <>
      <Breadcrumb location={{ pathname: "/languages" }} title="Languages" />
      <Breadcrumb location={location} title={node.name} />

      <h1 className="resource-page-header">{name}</h1>
      <h2 className="-mt-6 mb-6">{type} Language</h2>

      <div className="resource-content">
        <Field label="Typical Speakers">
          {typical_speakers.reduce((a, b) => (
            <>
              {a}, {b}
            </>
          ))}
        </Field>
        <Field label="Script">{script}</Field>
      </div>
    </>
  )
}
