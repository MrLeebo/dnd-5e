import React from "react"
import PropTypes from "prop-types"
import orderBy from "lodash/orderBy"
import { graphql, Link } from "gatsby"
import ScaleText from "react-scale-text"
import { Breadcrumb } from "../components/breadcrumbs"
import MonsterType from "../components/monster-type"
import SectionList from "../components/section-list"
import { useSortMenu } from "../components/sort-menu"

MonstersPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

const sortOptions = [
  { children: "Name", item: "node.name" },
  { children: "Size", item: "node.size" },
]

export default function MonstersPage({ data, location }) {
  const { sort, sortDir, createMenu } = useSortMenu(sortOptions[0].item, "asc")

  const monsters = orderBy(data.allMonsters.edges, [sort], [sortDir])

  return (
    <>
      <Breadcrumb location={location} title="Monsters" />
      <h1 className="page-header">Monsters {createMenu(sortOptions)}</h1>
      <div className="section-list">
        <SectionList
          items={monsters}
          sectionValue={({ node }) =>
            sort === "node.name" ? node.name[0] : node.size
          }
          section={val => (
            <div key={val} className="section-header">
              <ScaleText>{val}</ScaleText>
            </div>
          )}
        >
          {({ node }, idx) => (
            <div key={idx} className="section-item">
              <Link to={node.fields.slug}>
                <div className="section-item-card h-32">
                  <h3 className="section-item-title" key={node.id}>
                    {node.name}
                  </h3>

                  <span className="section-item-body">
                    <MonsterType node={node} />
                  </span>
                </div>
              </Link>
            </div>
          )}
        </SectionList>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allMonsters {
      edges {
        node {
          id
          name
          size
          type
          subtype
          alignment
          fields {
            slug
          }
        }
      }
    }
  }
`
