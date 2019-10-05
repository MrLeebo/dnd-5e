import React from "react"
import PropTypes from "prop-types"

Field.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default function Field({ label, children }) {
  if (!children) return null

  return (
    <div className="w-auto max-w-xs">
      <div className="flex sm:p-0 p-3 mr-6">
        <div className="uppercase tracked font-bold w-auto sm:mr-2 mr-4 text-red-600">
          {label}
        </div>{" "}
        {children}
      </div>
    </div>
  )
}
