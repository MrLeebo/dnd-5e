import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import slugify from "slugify"
import { Breadcrumb } from "../components/breadcrumbs"
import BlockField from "../components/block-field"

Classes.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

function getLevel(level) {
  switch (level) {
    case 1:
      return "1st"
    case 2:
      return "2nd"
    case 3:
      return "3rd"
    default:
      return `${level}th`
  }
}

export default function Classes({ data, location }) {
  const {
    classData: {
      name,
      hit_die,
      proficiency_choices,
      proficiencies,
      saving_throws,
      subclasses,
    },
    levels,
    features,
  } = data

  const spellCaster =
    levels.edges[1].node.spellcasting != null &&
    levels.edges[1].node.spellcasting.spell_slots_level_1 > 0

  const knowsCantrips =
    spellCaster && levels.edges[1].node.spellcasting.cantrips_known > 0
  const knowsSpells =
    spellCaster && levels.edges[1].node.spellcasting.spells_known > 0
  const canRage = name === "Barbarian"
  const knowsMartialArts = name === "Monk"
  const canSneakAttack = name === "Rogue"
  const knowsSorcery = name === "Sorcerer"
  const knowsInvocations = name === "Warlock"

  return (
    <>
      <Breadcrumb location={{ pathname: "/classes" }} title="Classes" />
      <Breadcrumb location={location} title={name} />
      <h1 className="resource-page-header">{name}</h1>
      <div className="resource-content">
        <h2 className="lg:text-xl mb-6" style={{ marginTop: "-1rem" }}>
          d{hit_die} hit dice
        </h2>
        <BlockField label="Proficiencies">
          <ul className="my-2 pl-4">
            {proficiencies.map(({ name }, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>

          {proficiency_choices.map(({ choose, from }, index) => (
            <div key={index}>
              Choose {choose} from
              <ul className="my-2 pl-4">
                {from.map(({ name }, index) => {
                  const skill = name.replace("Skill: ", "")
                  return (
                    <li key={index}>
                      <Link
                        to={`/skills/${slugify(skill, {
                          lower: true,
                        })}`}
                        className="text-red-600"
                      >
                        {skill}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </BlockField>
        <BlockField label="Saving Throws">
          <ul className="list">
            {saving_throws.map(({ name }, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </BlockField>
        <BlockField label="Subclasses">
          <ul className="list">
            {subclasses.map(({ name }, index) => (
              <li key={index}>
                <Link
                  to={`/subclasses/${slugify(name, { lower: true })}`}
                  className="text-red-600"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </BlockField>

        <BlockField label={<h2 className="mt-6">Level Chart</h2>}>
          <div className="border rounded w-full overflow-x-auto">
            <table className="table">
              <thead className="align-bottom">
                {spellCaster && (
                  <tr>
                    <th
                      colSpan={
                        3 +
                        +knowsCantrips +
                        +knowsSpells +
                        +canRage +
                        +knowsMartialArts +
                        +canSneakAttack +
                        +knowsSorcery +
                        +knowsInvocations
                      }
                    />
                    <th className="text-center" colSpan="9">
                      Spell Slots per Spell Level
                    </th>
                  </tr>
                )}
                <tr>
                  <th className="w-10 text-center">Level</th>
                  <th className="w-24 text-center">Proficiency Bonus</th>
                  <th className="w-64">Features</th>
                  {canRage && (
                    <>
                      <th className="text-center">Rages</th>
                      <th className="text-center" style={{ maxWidth: "7rem" }}>
                        Rage Damage
                      </th>
                    </>
                  )}
                  {knowsMartialArts && (
                    <>
                      <th className="w-16 text-center">Martial Arts</th>
                      <th className="w-16 text-center">Ki Points</th>
                      <th className="w-32 text-center">Unarmored Movement</th>
                    </>
                  )}
                  {canSneakAttack && (
                    <th className="w-16 text-center">Sneak Attack</th>
                  )}
                  {knowsSorcery && (
                    <th className="w-16 text-center">Sorcery Points</th>
                  )}
                  {knowsInvocations && (
                    <th className="w-16 text-center">Invocations Known</th>
                  )}
                  {spellCaster && (
                    <>
                      {knowsCantrips && (
                        <th className="text-center">Cantrips Known</th>
                      )}
                      {knowsSpells && (
                        <th className="text-center">Spells Known</th>
                      )}
                      <th className="text-center">1st</th>
                      <th className="text-center">2nd</th>
                      <th className="text-center">3rd</th>
                      <th className="text-center">4th</th>
                      <th className="text-center">5th</th>
                      <th className="text-center">6th</th>
                      <th className="text-center">7th</th>
                      <th className="text-center">8th</th>
                      <th className="text-center">9th</th>
                    </>
                  )}
                  <th />
                </tr>
              </thead>
              <tbody>
                {levels.edges.map(({ node }, index) => (
                  <tr key={index}>
                    <td className="text-center">{getLevel(node.level)}</td>
                    <td className="text-center">+{node.prof_bonus}</td>
                    <td>
                      {node.features.map(feature => feature.name).join(", ")}
                    </td>
                    {canRage && (
                      <>
                        <td className="text-center">
                          {node.class_specific.rage_count === 9999
                            ? "Unlimited"
                            : node.class_specific.rage_count}
                        </td>
                        <td className="text-center">
                          {node.class_specific.rage_damage_bonus}
                        </td>
                      </>
                    )}
                    {knowsMartialArts && (
                      <>
                        <td className="text-center">
                          {node.class_specific.martial_arts.dice_count}d
                          {node.class_specific.martial_arts.dice_value}
                        </td>
                        <td className="text-center">
                          {node.class_specific.ki_points}
                        </td>
                        <td className="text-center">
                          {node.class_specific.unarmored_movement}
                        </td>
                      </>
                    )}
                    {canSneakAttack && (
                      <td className="text-center">
                        {node.class_specific.sneak_attack.dice_count}d
                        {node.class_specific.sneak_attack.dice_value}
                      </td>
                    )}
                    {knowsSorcery && (
                      <td className="text-center">
                        {node.class_specific.sorcery_points}
                      </td>
                    )}
                    {knowsInvocations && (
                      <td className="text-center">
                        {node.class_specific.invocations_known}
                      </td>
                    )}
                    {spellCaster && (
                      <>
                        {knowsCantrips && (
                          <td className="text-center">
                            {(node.spellcasting &&
                              node.spellcasting.cantrips_known) || <>&ndash;</>}
                          </td>
                        )}
                        {knowsSpells && (
                          <td className="text-center">
                            {(node.spellcasting &&
                              node.spellcasting.spells_known) || <>&ndash;</>}
                          </td>
                        )}
                        {Array.from({ length: 9 }).map((_, i) => (
                          <td key={i} className="text-center">
                            {(node.spellcasting &&
                              node.spellcasting[
                                `spell_slots_level_${i + 1}`
                              ]) || <>&ndash;</>}
                          </td>
                        ))}
                      </>
                    )}
                    <td />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BlockField>
        <BlockField label={<h2 className="mt-6">Class Features</h2>}>
          <ul>
            {features.edges.map(({ node }, index) => (
              <li key={index}>
                <h3 className="uppercase tracked font-bold text-red-600">
                  {node.name} <small>(Level {node.level})</small>
                </h3>

                <p>{node.desc}</p>
              </li>
            ))}
          </ul>
        </BlockField>
      </div>
    </>
  )
}

export const query = graphql`
  query ClassesPage($name: String!) {
    classData: classes(name: { eq: $name }) {
      name
      hit_die
      proficiency_choices {
        choose
        type
        from {
          name
        }
      }
      proficiencies {
        name
      }
      saving_throws {
        name
      }
      subclasses {
        name
      }
      fields {
        slug
      }
    }

    levels: allLevels(
      filter: {
        class: { name: { eq: $name } }
        subclass: { name: { eq: null } }
      }
      sort: { fields: [level], order: ASC }
    ) {
      edges {
        node {
          level
          prof_bonus
          features {
            name
          }
          feature_choices {
            name
          }
          class_specific {
            rage_count
            rage_damage_bonus
            martial_arts {
              dice_count
              dice_value
            }
            sneak_attack {
              dice_count
              dice_value
            }
            brutal_critical_dice
            bardic_inspiration_die
            song_of_rest_die
            magical_secrets_max_5
            magical_secrets_max_7
            magical_secrets_max_9
            channel_divinity_charges
            destroy_undead_cr
            wild_shape_max_cr
            wild_shape_swim
            wild_shape_fly
            action_surges
            indomitable_uses
            extra_attacks
            ki_points
            unarmored_movement
            aura_range
            favored_enemies
            favored_terrain
            sorcery_points
            metamagic_known
            invocations_known
            mystic_arcanum_level_6
            mystic_arcanum_level_7
            mystic_arcanum_level_8
            mystic_arcanum_level_9
            arcane_recovery_levels
          }
          spellcasting {
            cantrips_known
            spells_known
            spell_slots_level_1
            spell_slots_level_2
            spell_slots_level_3
            spell_slots_level_4
            spell_slots_level_5
            spell_slots_level_6
            spell_slots_level_7
            spell_slots_level_8
            spell_slots_level_9
          }
        }
      }
    }

    features: allFeatures(
      filter: {
        class: { name: { eq: $name } }
        subclass: { name: { eq: null } }
        level: { ne: null }
      }
      sort: { fields: [level, name], order: ASC }
    ) {
      edges {
        node {
          name
          desc
          level
          subclass {
            name
          }
        }
      }
    }
  }
`
