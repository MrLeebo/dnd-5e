import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Breadcrumb } from "../components/breadcrumbs"

ConditionsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function ConditionsPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Conditions" />
      <h1 className="resource-page-header">Conditions</h1>

      <dl>
        {data.allConditions.edges.map(({ node }, index) => (
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
    allConditions(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          desc
        }
      }
    }
  }
`
