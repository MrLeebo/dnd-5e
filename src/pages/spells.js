import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import ScaleText from "react-scale-text"
import { Breadcrumb } from "../components/breadcrumbs"
import SectionList from "../components/section-list"

function getLevel(level) {
  switch (level) {
    case -1:
    case 0:
      return "Cantrips"
    case 1:
      return "1st Level"
    case 2:
      return "2nd Level"
    case 3:
      return "3rd Level"
    default:
      return `${level}th Level`
  }
}

SpellsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function SpellsPage({ data, location }) {
  return (
    <>
      <Breadcrumb location={location} title="Spells" />
      <h1 className="page-header">Spells</h1>

      <div className="section-list">
        <SectionList
          items={data.allSpells.edges}
          sectionValue={({ node }) => Math.max(node.level, 0)}
          section={val => (
            <div key={val} className="section-header">
              <ScaleText>{getLevel(val)}</ScaleText>
            </div>
          )}
        >
          {({ node }) => (
            <Link key={node.id} to={node.fields.slug} className="section-item">
              <div className="section-item-card h-32">
                <h3 className="section-item-title">{node.name}</h3>

                <span className="section-item-body">
                  {node.classes.map(c => c.name).join(", ")} {node.school.name}{" "}
                  &middot; {node.components.join(", ")}
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
    allSpells(sort: { fields: [level, name], order: ASC }) {
      edges {
        node {
          id
          name
          desc
          higher_level
          page
          range
          components
          material
          ritual
          duration
          concentration
          casting_time
          level
          school {
            name
          }
          classes {
            name
          }
          subclasses {
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
