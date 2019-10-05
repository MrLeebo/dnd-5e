import React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "../components/breadcrumbs"

Traits.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Traits({ pageContext: node, location }) {
  const { name, desc, races } = node

  return (
    <>
      <Breadcrumb location={location} title={name} />
      <h1 className="resource-page-header">{name}</h1>

      <div className="resource-content">
        <div className="text-xl">
          {races.map(({ name }, index) => (
            <p key={index}>{name}</p>
          ))}
        </div>

        <div>
          {Array.isArray(desc)
            ? desc.map((desc, index) => <p key={index}>{desc}</p>)
            : desc}
        </div>
      </div>
    </>
  )
}
