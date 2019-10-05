import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Downshift from "downshift"
import SearchMenu from "./search-menu"
import Nav from "./nav"
import Search from "./search"
import Menu from "./menu"

Header.propTypes = {
  navigate: PropTypes.func.isRequired,
  siteMetadata: PropTypes.object.isRequired,
  searchIndex: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default function Header({
  navigate,
  siteMetadata,
  searchIndex,
  location,
}) {
  const [show, setShow] = useState(false)
  const [prevHref, setPrevHref] = useState(location.href)
  const toggle = () => setShow(b => !b)

  const changeSelection = (item, { clearSelection }) => {
    if (!item) return
    navigate(item.path)
    clearSelection()
  }

  if (location.href !== prevHref) {
    setShow(false)
    setPrevHref(location.href)
  }

  const nav = (
    <header>
      <div className="flex p-2">
        <h1 className="hidden lg:block text-lg m-0">
          <Link to="/" className="text-red-600">
            {siteMetadata.title}
          </Link>
        </h1>

        <div className="w-2/3 lg:w-full mr-2">
          <Downshift
            onChange={changeSelection}
            itemToString={item => (item ? item.title : "")}
          >
            {downshiftProps => (
              <form
                className="relative"
                onSubmit={e => {
                  e.preventDefault()
                  navigate(`/search?q=${downshiftProps.inputValue}`)
                  downshiftProps.clearSelection()
                }}
              >
                <div className="absolute top-0 left-0 mt-1 ml-1 w-6 lh-solid">
                  <Search />
                </div>
                <input
                  {...downshiftProps.getInputProps({
                    type: "search",
                    placeholder: "Search...",
                    className: "search-input",
                  })}
                />

                {downshiftProps.isOpen ? (
                  <div className="hidden lg:block">
                    <SearchMenu searchIndex={searchIndex} {...downshiftProps} />
                  </div>
                ) : null}
              </form>
            )}
          </Downshift>
        </div>

        <button onClick={toggle} className="block lg:hidden cursor-pointer">
          <div className="w-4">
            <Menu />
          </div>
        </button>
      </div>

      <div className={`${show ? "" : "hidden"} lg:block bg-gray-800`}>
        <Nav menuLinks={siteMetadata.menuLinks} />
      </div>
    </header>
  )

  return (
    <>
      <div className="block lg:hidden relative bg-black text-red-300 z-1 left-0 top-0 right-0">
        {nav}
      </div>
      <div className="hidden lg:block fixed bg-black text-red=300 z-1 left-0 top-0 bottom-0 w-64">
        {nav}
      </div>
    </>
  )
}
