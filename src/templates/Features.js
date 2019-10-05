import React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "../components/breadcrumbs"
import slugify from "slugify"
import BlockField from "../components/block-field"

Features.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Features({ pageContext: node, location }) {
  const {
    name,
    class: { name: klass },
    subclass: { name: subclass },
    level,
    desc,
  } = node

  return (
    <>
      {klass && (
        <Breadcrumb
          location={{
            pathname: `/classes/${slugify(klass, { lower: true })}`,
          }}
          title={klass}
        />
      )}
      {subclass && (
        <Breadcrumb
          location={{
            pathname: `/subclasses/${slugify(subclass, { lower: true })}`,
          }}
          title={subclass}
        />
      )}
      <Breadcrumb location={location} title={node.name} />

      <h1 className="resource-page-header">
        {klass || subclass} {name} ({level})
      </h1>

      <BlockField label="Description">
        {Array.isArray(desc)
          ? desc.map((desc, index) => <p key={index}>{desc}</p>)
          : desc}
      </BlockField>
    </>
  )
}
