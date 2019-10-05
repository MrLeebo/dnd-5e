import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import Downshift from "downshift"

SortMenu.propTypes = {
  options: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  sortDir: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
  setSortDir: PropTypes.func.isRequired,
}

export default function SortMenu({
  options,
  sort,
  sortDir,
  setSort,
  setSortDir,
}) {
  const SortDirOption = useCallback(
    ({ item, closeMenu, ...rest }) => {
      return (
        <li
          role="option"
          aria-selected={sortDir === item}
          onClick={() => {
            setSortDir(item)
            closeMenu()
          }}
          className="bg-animate hover:bg-blue-200 cursor-pointer py-1 px-3"
          {...rest}
        />
      )
    },
    [sortDir, setSortDir]
  )

  return (
    <Downshift onChange={newSort => setSort(newSort)}>
      {({
        getToggleButtonProps,
        getMenuProps,
        getItemProps,
        isOpen,
        closeMenu,
      }) => (
        <div className="text-sm inline-block">
          <button
            {...getToggleButtonProps({
              className:
                "bg-animate rounded hover:bg-blue-200 border-0 bg-transparent py-1 px-2",
            })}
          >
            {options.find(opt => opt.item === sort).children}{" "}
            {sortDir === "desc" ? <>&and;</> : <>&or;</>}
          </button>

          {isOpen ? (
            <div
              className="absolute w-full"
              style={{ maxWidth: "10rem", zIndex: 1 }}
            >
              <ul
                {...getMenuProps({
                  className:
                    "leading-normal text-sm m-0 p-0 bg-white border border-black",
                  style: { maxHeight: "40vh" },
                })}
              >
                {options.map((opt, index) => (
                  <li
                    key={index}
                    {...getItemProps({
                      ...opt,
                      className:
                        "bg-animate hover:bg-blue-200 cursor-pointer py-1 px-3",
                    })}
                  />
                ))}
                <li className="border-t border-black" />
                <SortDirOption item="asc" closeMenu={closeMenu}>
                  Ascending
                </SortDirOption>
                <SortDirOption item="desc" closeMenu={closeMenu}>
                  Descending
                </SortDirOption>
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

export const useSortMenu = (defaultSort = "Name", defaultSortDir = "asc") => {
  const [sort, setSort] = useState(defaultSort)
  const [sortDir, setSortDir] = useState(defaultSortDir)

  return {
    sort,
    sortDir,
    createMenu: options => (
      <SortMenu
        options={options}
        sort={sort}
        sortDir={sortDir}
        setSort={setSort}
        setSortDir={setSortDir}
      />
    ),
  }
}
