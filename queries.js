module.exports = [
  {
    name: "AbilityScores",
    query: `
  {
    root: allAbilityScores {
      edges {
        node {
          name
          full_name
          desc
          skills {
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `,
  },
  {
    name: "Classes",
    query: `
    {
      root: allClasses {
        edges {
          node {
            name
            fields {
              slug
            }
          }
        }
      }
    }
    `,
  },
  {
    name: "Conditions",
    template: "Simple",
    query: `
    {
      root: allConditions {
        edges {
          node {
            name
            desc
            fields {
              slug
            }
          }
        }
      }
    }
    `,
  },
  {
    name: "DamageTypes",
    template: "Simple",
    query: `
    {
      root: allDamageTypes {
        edges {
          node {
            name
            desc
            fields {
              slug
            }
          }
        }
      }
    }
    `,
  },
  {
    name: "EquipmentCategories",
    query: `
      {
        root: allEquipmentCategories {
          edges {
            node {
              name
              equipment {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Equipment",
    query: `
      {
        root: allEquipment {
          edges {
            node {
              name
              equipment_category
              armor_category
              weapon_category
              gear_category
              tool_category
              vehicle_category
              weapon_range
              category_range
              cost {
                unit
                quantity
              }
              damage {
                dice_count
                dice_value
                damage_type {
                  name
                }
              }
              range {
                normal
              }
              weight
              properties {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Features",
    query: `
      {
        root: allFeatures {
          edges {
            node {
              name
              class {
                name
              }
              subclass {
                name
              }
              level
              desc
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Languages",
    query: `
      {
        root: allLanguages {
          edges {
            node {
              name
              type
              typical_speakers
              script
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Levels",
    slug: node => {
      let level = node.class.name.toLowerCase() + node.level
      if (node.subclass) {
        level = node.subclass.name + level
      }
      return level
    },
    query: `
      {
        root: allLevels {
          edges {
            node {
              class {
                name
              }
              subclass {
                name
              }
              level
              ability_score_bonuses
              prof_bonus
              feature_choices {
                name
              }
              features {
                name
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
              class_specific {
                rage_count
                rage_damage_bonus
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
                martial_arts {
                  dice_count
                  dice_value
                }

                aura_range

                favored_enemies
                favored_terrain

                sneak_attack {
                  dice_count
                  dice_value
                }

                sorcery_points
                metamagic_known
                creating_spell_slots {
                  spell_slot_level
                  sorcery_point_cost
                }

                invocations_known
                mystic_arcanum_level_6
                mystic_arcanum_level_7
                mystic_arcanum_level_8
                mystic_arcanum_level_9

                arcane_recovery_levels
              }

              subclass_specific {
                additional_magical_secrets_max_lvl
              }

              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "MagicSchools",
    template: "Simple",
    query: `
      {
        root: allMagicSchools {
          edges {
            node {
              name
              desc
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Monsters",
    query: `
      {
        root: allMonsters {
          edges {
            node {
              name
              size
              type
              subtype
              alignment
              armor_class
              hit_points
              hit_dice
              speed {
                walk
                climb
                fly
                swim
                burrow
                hover
              }
              strength
              dexterity
              constitution
              intelligence
              wisdom
              charisma
              medicine
              religion
              dexterity_save
              charisma_save
              constitution_save
              wisdom_save
              charisma_save
              intelligence_save
              history
              insight
              perception
              stealth
              damage_vulnerabilities
              damage_resistances
              damage_immunities
              condition_immunities
              senses
              languages
              challenge_rating
              special_abilities {
                name
                desc
              }
              actions {
                name
                desc
              }

              legendary_actions {
                name
                desc
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Proficiencies",
    query: `
      {
        root: allProficiencies {
          edges {
            node {
              name
              type
              classes {
                name
              }
              races {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Races",
    query: `
      {
        root: allRaces {
          edges {
            node {
              name
              speed
              ability_bonuses {
                name
                bonus
              }
              alignment
              age
              size
              size_description
              starting_proficiencies {
                name
              }
              starting_proficiency_options {
                choose
                type
                from {
                  name
                }
              }
              languages {
                name
              }
              language_options {
                choose
                type
                from {
                  name
                }
              }
              language_desc
              traits {
                name
              }
              subraces {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Skills",
    query: `
      {
        root: allSkills {
          edges {
            node {
              name
              desc
              ability_score {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Spellcasting",
    slug: node => node.class.name.toLowerCase(),
    query: `
      {
        root: allSpellcasting {
          edges {
            node {
              class {
                name
              }
              spellcasting_ability {
                name
              }
              info {
                name
                desc
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Spells",
    query: `
      {
        root: allSpells {
          edges {
            node {
              name
              desc
              higher_level
              page
              range
              components
              material
              ritual
              duration
              concentration
              casting_time
              level
              school {
                name
              }
              classes {
                name
              }
              subclasses {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "StartingEquipment",
    slug: node => node.class.name.toLowerCase(),
    query: `
      {
        root: allStartingEquipment {
          edges {
            node {
              class {
                name
              }
              starting_equipment {
                item {
                  name
                }
                quantity
              }
              choices_to_make
              choice_1 {
                choose
                type
                from {
                  item {
                    name
                  }
                  quantity
                }
              }

              choice_2 {
                choose
                type
                from {
                  item {
                    name
                  }
                  quantity
                }
              }

              choice_3 {
                choose
                type
                from {
                  item {
                    name
                  }
                  quantity
                }
              }

              choice_4 {
                choose
                type
                from {
                  item {
                    name
                  }
                  quantity
                }
              }

              choice_5 {
                choose
                type
                from {
                  item {
                    name
                  }
                  quantity
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Subclasses",
    query: `
      {
        root: allSubclasses {
          edges {
            node {
              name
              class {
                name
              }
              subclass_flavor
              desc
              features {
                name
              }
              spells {
                prerequisites {
                  url
                  type
                }
                spell {
                  url
                  name
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Subraces",
    query: `
      {
        root: allSubraces {
          edges {
            node {
              name
              race {
                name
              }
              desc
              starting_proficiencies {
                name
              }
              language_options {
                choose
                from {
                  name
                }
              }
              racial_traits {
                name
              }
              racial_trait_options {
                choose
                from {
                  name
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "Traits",
    query: `
      {
        root: allTraits {
          edges {
            node {
              name
              desc
              races {
                name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
  {
    name: "WeaponProperties",
    template: "Simple",
    query: `
      {
        root: allWeaponProperties {
          edges {
            node {
              name
              desc
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  },
]
