import React from "react"
import PropTypes from "prop-types"
import NavLink from "./nav-link"

Nav.propTypes = {
  menuLinks: PropTypes.array.isRequired,
}

export default function Nav({ menuLinks }) {
  return (
    <ul className="m-0 p-0 font-sans">
      {menuLinks.map(({ link, name }, index) => (
        <li key={index}>
          <NavLink
            to={link}
            state={{ breadcrumb: "reset" }}
            className="block text-gray-100 hover:text-gray-900 hover:bg-gray-100 px-6 py-3"
            activeClassName="bg-gray-100 border-l text-gray-900"
            children={name}
          />
        </li>
      ))}
    </ul>
  )
}
