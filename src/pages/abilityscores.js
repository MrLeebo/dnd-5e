import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { Breadcrumb } from "../components/breadcrumbs"

AbilitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function AbilitiesPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Ability Scores" />
      <h1 className="page-header">Ability Scores</h1>

      <div className="section-list">
        {data.allAbilityScores.edges.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug} className="section-item">
            <div className="section-item-card">
              <h3 className="section-item-title" key={node.id}>
                {node.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allAbilityScores(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          fields {
            slug
          }
        }
      }
    }
  }
`
