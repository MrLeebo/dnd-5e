import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Breadcrumb } from "../components/breadcrumbs"
import SEO from "../components/seo"

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default function IndexPage({ location }) {
  return (
    <>
      <Breadcrumb location={location} />
      <SEO title="Home" keywords={[`dnd`, `d&d`, `srd`]} />
      <ul className="text-red-600">
        <li>
          <Link to="/monsters">Monsters</Link>
        </li>
        <li>
          <Link to="/spells">Spells</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/races">Races</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/equipment">Equipment</Link>
        </li>
        <li>
          <Link to="/abilityscores">Ability Scores</Link>
        </li>
        <li>
          <Link to="/conditions">Conditions</Link>
        </li>
        <li>
          <Link to="/damagetypes">Damage Types</Link>
        </li>
        <li>
          <Link to="/languages">Languages</Link>
        </li>
        <li>
          <Link to="/traits">Traits</Link>
        </li>
        <li>
          <Link to="/weaponproperties">Weapon Properties</Link>
        </li>
      </ul>
    </>
  )
}
