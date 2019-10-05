import React from "react"
import PropTypes from "prop-types"

const abilities = [
  { label: "STR", value: "strength" },
  { label: "DEX", value: "dexterity" },
  { label: "CON", value: "constitution" },
  { label: "INT", value: "intelligence" },
  { label: "WIS", value: "wisdom" },
  { label: "CHA", value: "charisma" },
]

function abilityBonus(value) {
  if (!value) return "-"

  return (
    <span>
      {value} ({value >= 10 && "+"}
      {Math.floor((value - 10) / 2)})
    </span>
  )
}

const statStyle = { width: "4em" }

StatBlock.propTypes = {
  node: PropTypes.object.isRequired,
}

export default function StatBlock({ node }) {
  return (
    <>
      <div className="inline-block">
        <hr />
        <div className="flex flex-wrap justify-around">
          {abilities.map(a => (
            <div key={a.value} className="flex flex-col mr-2">
              <div
                className="text-center uppercase tracked font-bold"
                style={statStyle}
              >
                {a.label}
              </div>
              <div className="text-center" style={statStyle}>
                {abilityBonus(node[a.value])}
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  )
}
