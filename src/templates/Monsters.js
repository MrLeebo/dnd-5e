import React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "../components/breadcrumbs"
import MonsterType from "../components/monster-type"
import HealthBlock from "../components/health-block"
import StatBlock from "../components/stat-block"
import SavingThrowBlock from "../components/saving-throw-block"
import Field from "../components/field"
import BlockField from "../components/block-field"

Monsters.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Monsters({ pageContext: node, location }) {
  const hasSavingThrows = !!(
    node.charisma_save ||
    node.constitution_save ||
    node.dexterity_save ||
    node.intelligence_save ||
    node.strength_save ||
    node.wisdom_save
  )

  return (
    <>
      <Breadcrumb location={{ pathname: "/monsters" }} title="Monsters" />
      <Breadcrumb location={location} title={node.name} />
      <h1 className="resource-page-header">{node.name}</h1>
      <div className="resource-content">
        <div>
          <MonsterType node={node} />
        </div>

        <div className="inline-block mb-2">
          <div className="mt-3 flex flex-wrap">
            <Field label="Armor Class">{node.armor_class}</Field>
            <Field label="Hit Points">
              <HealthBlock node={node} />
            </Field>
          </div>
        </div>

        <BlockField label="Speed">
          {Object.entries(node.speed).map(
            ([key, val]) =>
              val && (
                <dl key={key}>
                  <dt className="inline-block capitalize w-16">{key}</dt>
                  <dd className="inline-block">{val}</dd>
                </dl>
              )
          )}
        </BlockField>

        <div className="mt-3">
          <StatBlock node={node} />
        </div>

        {hasSavingThrows && (
          <BlockField label="Saving Throws">
            <SavingThrowBlock node={node} />
          </BlockField>
        )}

        <BlockField label="Senses">
          <span className="capitalize">{node.senses}</span>
        </BlockField>
        <BlockField label="Languages">
          <span className="capitalize">{node.languages}</span>
        </BlockField>
        <BlockField label="Challenge">
          {node.challenge_rating} ({xp[node.challenge_rating]}XP)
        </BlockField>

        <hr />

        {(node.damage_vulnerabilities.length > 0 ||
          node.damage_resistances.length > 0 ||
          node.damage_immunities.length > 0 ||
          node.condition_immunities.length > 0) && (
          <>
            {node.damage_vulnerabilities.length > 0 && (
              <BlockField label="Damage Vulnerabilities">
                <div className="capitalize">
                  {node.damage_vulnerabilities.join(", ")}
                </div>
              </BlockField>
            )}

            {node.damage_resistances.length > 0 && (
              <BlockField label="Damage Resistances">
                <div className="capitalize">
                  {node.damage_resistances.join(", ")}
                </div>
              </BlockField>
            )}

            {node.damage_immunities.length > 0 && (
              <BlockField label="Damage Immunities">
                <div className="capitalize">
                  {node.damage_immunities.join(", ")}
                </div>
              </BlockField>
            )}

            {node.condition_immunities.length > 0 && (
              <BlockField label="Condition Immunities">
                <div className="capitalize">
                  {node.condition_immunities.join(", ")}
                </div>
              </BlockField>
            )}
            <hr />
          </>
        )}

        <BlockField label="Special Abilities">
          {node.special_abilities &&
            node.special_abilities.map((ability, index) => (
              <React.Fragment key={index}>
                <h4>{ability.name}</h4>
                <p>{ability.desc}</p>
              </React.Fragment>
            ))}
        </BlockField>

        <BlockField label="Actions">
          {node.actions &&
            node.actions.map((action, index) => (
              <React.Fragment key={index}>
                <h4>{action.name}</h4>
                <p>{action.desc}</p>
              </React.Fragment>
            ))}
        </BlockField>

        <BlockField label="Legendary Actions">
          {node.legendary_actions &&
            node.legendary_actions.map((action, index) => (
              <React.Fragment key={index}>
                <h4>{action.name}</h4>
                <p>{action.desc}</p>
              </React.Fragment>
            ))}
        </BlockField>
      </div>
    </>
  )
}

const xp = {
  "0": "0-10",
  "0.125": "25",
  "0.25": "50",
  "0.5": "100",
  "1": "200",
  "2": "450",
  "3": "700",
  "4": "1,100",
  "5": "1,800",
  "6": "2,300",
  "7": "2,900",
  "8": "3,900",
  "9": "5,000",
  "10": "5,900",
  "11": "7,200",
  "12": "8,400",
  "13": "10,000",
  "14": "11,500",
  "15": "13,000",
  "16": "15,000",
  "17": "18,000",
  "18": "20,000",
  "19": "22,000",
  "20": "25,000",
  "21": "33,000",
  "22": "41,000",
  "23": "50,000",
  "24": "62,000",
  "25": "75,000",
}
