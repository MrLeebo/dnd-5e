import React, { memo } from "react"
import PropTypes from "prop-types"

Menu.propTypes = {
  className: PropTypes.string,
}

Menu.defaultProps = {
  className: "icon-menu",
}

function Menu({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        className="secondary"
        fillRule="evenodd"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      />
    </svg>
  )
}

export default memo(Menu)
