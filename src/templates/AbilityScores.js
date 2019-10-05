import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import slugify from "slugify"
import { Breadcrumb } from "../components/breadcrumbs"
import BlockField from "../components/block-field"

AbilityScores.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function AbilityScores({ pageContext: node, location }) {
  const { full_name, desc, skills } = node

  return (
    <>
      <Breadcrumb
        location={{ pathname: "/abilityscores" }}
        title="Ability Scores"
      />
      <Breadcrumb location={location} title={node.name} />
      <h1 className="resource-page-header">{full_name}</h1>
      <div className="resource-content">
        <BlockField label="Description">
          <div>
            {desc.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </BlockField>
        <BlockField label="Skills">
          <ul className="my-2 pl-4">
            {skills.map((skill, index) => (
              <li key={index}>
                <Link to={`/skills/${slugify(skill.name, { lower: true })}`}>
                  {skill.name}
                </Link>
              </li>
            ))}
          </ul>
        </BlockField>
      </div>
    </>
  )
}
