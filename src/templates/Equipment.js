import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import slugify from "slugify"
import { Breadcrumb } from "../components/breadcrumbs"
import Field from "../components/field"
import BlockField from "../components/block-field"

Equipment.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Equipment({ pageContext: node, location }) {
  const {
    name,
    equipment_category,
    weapon_range,
    category_range,
    cost,
    damage,
    range,
    weight,
    properties,
  } = node

  return (
    <>
      <Breadcrumb location={{ pathname: "/equipment" }} title="Equipment" />
      <Breadcrumb location={location} title={node.name} />

      <h1 className="resource-page-header">{name}</h1>

      <div className="resource-content">
        <p>{equipment_category}</p>

        {range && (
          <BlockField label="Range">
            {range.normal && <div>Normal {range.normal}</div>}
            {range.long && <div>Long {range.long}</div>}
          </BlockField>
        )}
        {properties && properties.length > 0 && (
          <BlockField label="Properties">
            <div>
              {properties
                .map(({ name }, index) => (
                  <Link
                    to={`/weaponproperties/${slugify(name, { lower: true })}`}
                    key={index}
                  >
                    {name}
                  </Link>
                ))
                .reduce((a, b) => (
                  <>
                    {a}, {b}
                  </>
                ))}
            </div>
          </BlockField>
        )}

        {weight > 0 && <Field label="Weight">{weight}lbs</Field>}
        {weapon_range && <Field label="Range">{weapon_range}</Field>}
        {category_range && !weapon_range && (
          <Field label="Range">{category_range}</Field>
        )}
        {cost && (
          <Field label="Cost">
            {cost.quantity}
            {cost.unit}
          </Field>
        )}
        {damage && (
          <Field label="Damage">
            {damage.dice_count}d{damage.dice_value} {damage.damage_type.name}
          </Field>
        )}
      </div>
    </>
  )
}
