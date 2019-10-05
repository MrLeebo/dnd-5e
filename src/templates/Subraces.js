import React from "react"
//import Layout from "../components/layout"

/*
index
name
race {
  name
}
desc
ability_bonuses
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
racial_traits {
  name
}
racial_trait_options {
  choose
  from {
    name
  }
}
*/

export default function Subraces({ pageContext }) {
  const { name } = pageContext

  return (
    <>
      <h1>{name}</h1>
    </>
  )
}
