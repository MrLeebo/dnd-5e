import React from "react"
//import Layout from "../components/layout"

/*
name
type
classes {
  name
}
races {
  name
}
*/

export default function Proficiencies({ pageContext }) {
  const { name, type, classes, races } = pageContext

  return (
    <>
      <h1>{name}</h1>
      {type}

      <div>
        {classes.map(({ name }, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>

      <div>
        {races.map(({ name }, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </>
  )
}
