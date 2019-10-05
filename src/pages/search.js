import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import useQuery from "../hooks/useQuery"
import useSearch from "../hooks/useSearch"
import { Breadcrumb } from "../components/breadcrumbs"
import SEO from "../components/seo"

SearchPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default function SearchPage({ location }) {
  const { q } = useQuery(location)
  const results = useSearch(q)

  return (
    <>
      <Breadcrumb location={location} title="Search" />
      <SEO title="Search" keywords={[`dnd`, `d&d`, `srd`]} />

      {results.length > 0 ? (
        <>
          <p>Search results for &quot;{q}&quot;</p>

          <ul className="my-4 pl-2">
            {results.map(item => (
              <li key={item.id}>
                <Link to={item.path} className="text-red-600">
                  {item.title} - {item.type}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No results found for &quot;{q}&quot;</p>
      )}
    </>
  )
}
