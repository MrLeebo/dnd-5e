import React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "../components/breadcrumbs"

Skills.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Skills({ pageContext: node, location }) {
  const { name, desc, ability_score } = node

  return (
    <>
      <Breadcrumb location={{ pathname: "/skills" }} title="Skills" />
      <Breadcrumb location={location} title={name} />

      <h1 className="resource-page-header">
        {name} ({ability_score.name})
      </h1>

      <div className="resource-content">
        {Array.isArray(desc)
          ? desc.map((desc, index) => <p key={index}>{desc}</p>)
          : desc}
      </div>
    </>
  )
}
