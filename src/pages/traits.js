import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import ScaleText from "react-scale-text"
import { Breadcrumb } from "../components/breadcrumbs"
import SectionList from "../components/section-list"

TraitsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function TraitsPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Traits" />
      <h1 className="page-header">Traits</h1>

      <div className="section-list">
        <SectionList
          items={data.allTraits.edges}
          sectionValue={({ node }) => node.name[0]}
          section={val => (
            <div key={val} className="section-header">
              <ScaleText>{val}</ScaleText>
            </div>
          )}
        >
          {({ node }) => (
            <Link
              key={node.fields.slug}
              to={node.fields.slug}
              className="section-item"
            >
              <div className="section-item-card h-24">
                <h3 className="section-item-title">{node.name}</h3>
              </div>
            </Link>
          )}
        </SectionList>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allTraits(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          fields {
            slug
          }
        }
      }
    }
  }
`
