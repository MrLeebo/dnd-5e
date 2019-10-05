import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import slugify from "slugify"
import { Breadcrumb } from "../components/breadcrumbs"

EquipmentCategories.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function EquipmentCategories({ pageContext: node, location }) {
  const { name, equipment } = node
  const items = useMemo(
    () =>
      equipment.sort((a, b) =>
        a.name.localeCompare(b.name, { sensitivity: "base" })
      ),
    [equipment]
  )

  return (
    <>
      <Breadcrumb location={location} title={`${name} Categories`} />
      <h1>{name} Categories</h1>

      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="w-100 w-50-ns w-third-l pa1">
            <Link to={`/equipment/${slugify(item.name, { lower: true })}`}>
              <div className="b--black-10 ba br3 pa3 h4 hover-bg-black-10">
                <h3 className="mt0 f4 ttu tracked">{item.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
