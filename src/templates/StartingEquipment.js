import React from "react"
//import Layout from "../components/layout"

/*
index
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
*/

export default function StartingEquipment({ pageContext }) {
  const { class: klass } = pageContext

  return (
    <>
      <h1>{klass.name} Starting Equipment</h1>
    </>
  )
}
