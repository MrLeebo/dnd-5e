import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Breadcrumb } from "../components/breadcrumbs"

DamageTypesPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function DamageTypesPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Damage Types" />
      <h1 className="resource-page-header">Damage Types</h1>

      <dl>
        {data.allDamageTypes.edges.map(({ node }, index) => (
          <React.Fragment key={index}>
            <dt className="text-red-600">{node.name}</dt>
            <dd className="mb-3">{node.desc}</dd>
          </React.Fragment>
        ))}
      </dl>
    </>
  )
}

export const query = graphql`
  query {
    allDamageTypes(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          desc
        }
      }
    }
  }
`
