import React from "react"
import PropTypes from "prop-types"

BlockField.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node,
}

BlockField.defaultProps = {
  label: "",
  children: null,
}

export default function BlockField({ label, children }) {
  if (!children) return null

  return (
    <div className="sm:px-0 px-3">
      <span className="uppercase tracked font-bold w-auto sm:mr-2 mr-3 text-red-600">
        {label}
      </span>{" "}
      {children}
    </div>
  )
}
