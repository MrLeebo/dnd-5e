import React from "react"
import PropTypes from "prop-types"

Simple.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default function Simple({ pageContext }) {
  const { name, desc } = pageContext

  return (
    <>
      <h1 className="resource-page-header">{name}</h1>

      <div className="resource-content">
        {Array.isArray(desc)
          ? desc.map((desc, index) => <p key={index}>{desc}</p>)
          : desc}
      </div>
    </>
  )
}
