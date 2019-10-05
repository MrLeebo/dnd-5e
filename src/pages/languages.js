import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import ScaleText from "react-scale-text"
import { Breadcrumb } from "../components/breadcrumbs"
import SectionList from "../components/section-list"

LanguagesPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function LanguagesPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Languages" />
      <h1 className="page-header">Languages</h1>

      <div className="section-list">
        <SectionList
          items={data.allLanguages.edges}
          sectionValue={({ node }) => node.type}
          section={val => (
            <div key={val} className="section-header">
              <ScaleText>{val}</ScaleText>
            </div>
          )}
        >
          {({ node }) => (
            <Link key={node.id} to={node.fields.slug} className="section-item">
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
    allLanguages(sort: { fields: [type, name], order: ASC }) {
      edges {
        node {
          id
          name
          type
          fields {
            slug
          }
        }
      }
    }
  }
`
