import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { Breadcrumb } from "../components/breadcrumbs"

RacesPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function RacesPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Races" />
      <h1 className="page-header">Races</h1>
      <div className="section-list">
        {data.allRaces.edges.map(({ node }, idx) => (
          <div key={idx} className="section-item">
            <Link to={node.fields.slug}>
              <div className="section-item-card">
                <h3 className="section-item-title" key={node.id}>
                  {node.name}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allRaces {
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
