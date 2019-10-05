import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import ScaleText from "react-scale-text"
import { Breadcrumb } from "../components/breadcrumbs"
import SectionList from "../components/section-list"

SkillsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function SkillsPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Skills" />
      <h1 className="page-header">Skills</h1>

      <div className="section-list">
        <SectionList
          items={data.allSkills.edges}
          sectionValue={({ node }) => node.name[0]}
          section={val => (
            <div key={val} className="section-header">
              <ScaleText>{val}</ScaleText>
            </div>
          )}
        >
          {({ node }) => (
            <Link key={node.id} to={node.fields.slug} className="section-item">
              <div className="section-item-card h-24">
                <h3 className="section-item-title" key={node.id}>
                  {node.name}
                </h3>
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
    allSkills {
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
