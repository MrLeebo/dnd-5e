import React from "react"
import PropTypes from "prop-types"
import useSearch from "../hooks/useSearch"

SearchMenu.propTypes = {
  getItemProps: PropTypes.func.isRequired,
  getMenuProps: PropTypes.func.isRequired,
  highlightedIndex: PropTypes.number,
  selectedItem: PropTypes.object,
  inputValue: PropTypes.string,
}

SearchMenu.defaultProps = {
  highlightedIndex: null,
  selectedItem: null,
  inputValue: "",
}

export default function SearchMenu({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  selectedItem,
  inputValue,
}) {
  const results = useSearch(inputValue)

  return (
    <div className="absolute w-full bg-white" style={{ zIndex: 2 }}>
      <ul
        {...getMenuProps({
          className: "m-0 pl-0 overflow-y-scroll border border-black",
          style: { maxHeight: "40vh" },
        })}
      >
        {results.map((item, index) => (
          <li
            {...getItemProps({
              key: index,
              index,
              item,
              className: `pointer ${
                highlightedIndex === index ? "bg-blue-200" : ""
              }`,
              style: {
                fontWeight: selectedItem === item ? "bold" : "normal",
              },
            })}
          >
            {item.title} <span className="text-gray-500">{item.type}</span>{" "}
            <span className="text-gray-900">
              {item.tags && item.tags.join(" | ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
