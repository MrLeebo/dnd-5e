import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const partiallyActive = (className = "") => ({ isPartiallyCurrent }) => ({
  className:
    className + (isPartiallyCurrent ? ` text-gray-900 bg-gray-100` : ``),
})

NavLink.propTypes = {
  className: PropTypes.string.isRequired,
}

export default function NavLink(props) {
  const { className, ...rest } = props
  return <Link getProps={partiallyActive(className)} {...rest} />
}
