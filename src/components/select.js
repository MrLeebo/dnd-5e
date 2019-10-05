import React from "react"
import Select from "react-select"

const styles = {
  control: (props, state) => ({
    ...props,
    borderStyle: "none",
    borderWidth: 0,
  }),
  dropdownIndicator: () => ({ display: "none" }),
  indicatorSeparator: () => ({ display: "none" }),
  option: (props, state) => ({
    ...props,
    fontWeight: state.isSelected ? "bold" : "normal",
  }),
}

export default function(props) {
  return <Select styles={styles} {...props} />
}
