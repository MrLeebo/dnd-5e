import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import ScaleText from "react-scale-text"
import { Breadcrumb } from "../components/breadcrumbs"
import SectionList from "../components/section-list"

FeaturesPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function FeaturesPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Features" />
      <h1 className="page-header">Features</h1>

      <div className="section-list">
        <SectionList
          items={data.allFeatures.edges}
          sectionValue={({ node }) => node.class.name}
          section={val => (
            <div key={val} className="section-header">
              <ScaleText>{val}</ScaleText>
            </div>
          )}
        >
          {({ node }) => (
            <Link key={node.id} to={node.fields.slug} className="section-item">
              <div className="section-item-card h-32">
                <h3 className="section-item-title">{node.name}</h3>

                <span className="section-item-body">
                  Level {node.level}{" "}
                  {node.subclass &&
                    node.subclass.name &&
                    `(${node.subclass.name})`}
                </span>
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
    allFeatures(sort: { fields: [class___name, name], order: ASC }) {
      edges {
        node {
          id
          name
          level
          class {
            name
          }
          subclass {
            name
          }
          level
          fields {
            slug
          }
        }
      }
    }
  }
`
