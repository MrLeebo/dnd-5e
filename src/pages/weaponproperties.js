import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Breadcrumb } from "../components/breadcrumbs"

WeaponPropertiesPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function WeaponPropertiesPage({ data, location }) {
  return (
    <>
      <h1 className="resource-page-header">Weapon Properties</h1>
      <Breadcrumb location={location} title="Weapon Properties" />

      <dl>
        {data.allWeaponProperties.edges.map(({ node }, index) => (
          <React.Fragment key={index}>
            <dt className="text-red-600">{node.name}</dt>
            <dd className="mb-3">
              {Array.isArray(node.desc)
                ? node.desc.map((desc, index) => <p key={index}>{desc}</p>)
                : node.desc}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </>
  )
}

export const query = graphql`
  query {
    allWeaponProperties(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          desc
          fields {
            slug
          }
        }
      }
    }
  }
`
