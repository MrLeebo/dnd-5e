import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import slugify from "slugify"
import { Breadcrumb } from "../components/breadcrumbs"
import BlockField from "../components/block-field"

Subclasses.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Subclasses({ pageContext: node, location }) {
  const {
    name,
    desc,
    class: { name: className },
    subclass_flavor,
    features,
    spells,
  } = node

  return (
    <>
      <Breadcrumb location={location} title={name} />

      <h1>
        {name} ({className})
      </h1>

      <p>{subclass_flavor}</p>

      <BlockField label="Description">
        {Array.isArray(desc)
          ? desc.map((desc, index) => <p key={index}>{desc}</p>)
          : desc}
      </BlockField>

      {features && features.length > 0 && (
        <BlockField label="Features">
          <ul className="list">
            {features.map((feature, index) => (
              <li key={index}>
                <Link
                  to={`/features/${slugify(feature.name, { lower: true })}`}
                >
                  {feature.name}
                </Link>
              </li>
            ))}
          </ul>
        </BlockField>
      )}

      {spells && spells.length > 0 && (
        <BlockField label="Spells">
          <ul className="list">
            {spells.map(({ spell }, index) => (
              <li key={index}>{spell.name}</li>
            ))}
          </ul>
        </BlockField>
      )}
    </>
  )
}
