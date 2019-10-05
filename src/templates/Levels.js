import React from "react"
//import Layout from "../components/layout"

/*
index
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
*/

export default function Simple({ pageContext }) {
  const { class: klass, subclass, level } = pageContext

  return (
    <>
      <h1>
        {subclass ? subclass.name : ""} {klass.name} {level}
      </h1>
    </>
  )
}
