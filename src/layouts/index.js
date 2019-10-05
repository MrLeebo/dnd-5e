import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import Helmet from "react-helmet"

import { SearchProvider } from "../hooks/useSearch"
import Breadcrumbs from "../components/breadcrumbs"
import Header from "../components/header"
import withErrorBoundary from "../components/error-boundary"
import "../components/styles.css"

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navigate: PropTypes.func.isRequired,
  error: PropTypes.object,
  clearError: PropTypes.func,
  location: PropTypes.object.isRequired,
}

Layout.defaultProps = {
  error: null,
  clearError: null,
}

function Layout({ children, navigate, error, clearError, location }) {
  const { site, siteSearchIndex } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        siteSearchIndex {
          index
        }
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )

  if (error) {
    return (
      <>
        <p>Something broke.</p>
        <button onClick={clearError}>Retry</button>
      </>
    )
  }

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "bg-white",
        }}
      />

      <SearchProvider value={siteSearchIndex.index}>
        <Header
          siteMetadata={site.siteMetadata}
          searchIndex={siteSearchIndex.index}
          navigate={navigate}
          location={location}
        />

        <div className="lg:ml-64 lg:px-2 ml-7 athelas">
          <main className="p-4">
            <Breadcrumbs>
              {({ breadcrumbs }) => (
                <>
                  <div className="font-sans">
                    {breadcrumbs.reduce(
                      (list, crumb, index) => {
                        list.push(
                          <React.Fragment key={index + 1}>
                            {" "}
                            <span className="text-gray-600 opacity-75">
                              &gt;
                            </span>{" "}
                            <span className="text-red-500">
                              <Link
                                {...crumb}
                                activeClassName="text-gray-800 pointer-events-none"
                              />
                            </span>
                          </React.Fragment>
                        )
                        return list
                      },
                      [
                        <Link
                          key="0"
                          to="/"
                          state={{ breadcrumb: "reset" }}
                          className="text-red-500"
                          activeClassName="hidden"
                        >
                          Home
                        </Link>,
                      ]
                    )}
                  </div>
                  {children}
                </>
              )}
            </Breadcrumbs>
          </main>
          <footer className="relative left-0 right-0 bottom-1 text-center">
            © {new Date().getFullYear()}
            {` `}
            <a href="https://jeremyliberman.com" className="text-red-600">
              Jeremy Liberman
            </a>
          </footer>
        </div>
      </SearchProvider>
    </>
  )
}

export default withErrorBoundary(Layout)
