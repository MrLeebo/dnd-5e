import React, {
  useReducer,
  useMemo,
  useContext,
  useEffect,
  useRef,
  createContext,
} from "react"
import PropTypes from "prop-types"

const BreadcrumbContext = createContext()

const push = payload => ({ type: "PUSH", payload })

Breadcrumbs.propTypes = {
  children: PropTypes.func.isRequired,
}

export default function Breadcrumbs({ children }) {
  const [breadcrumbs, dispatch] = useReducer(reducer, [])

  const actions = useMemo(
    () => ({
      push: crumb => dispatch(push(crumb)),
    }),
    []
  )

  return (
    <BreadcrumbContext.Provider value={actions}>
      {children({ breadcrumbs })}
    </BreadcrumbContext.Provider>
  )
}

export function Breadcrumb({ location, title, children }) {
  const { push } = useContext(BreadcrumbContext)
  const titleRef = useRef(title)

  useEffect(() => {
    const crumb = {
      to: location.pathname + (location.search || ""),
      state: location.state,
      children: titleRef.current,
    }
    push(crumb)
  }, [location, push])

  useEffect(() => {
    titleRef.current = title
  }, [title])

  return children || null
}

function reducer(breadcrumbs, { type, payload }) {
  switch (type) {
    case "PUSH": {
      if (!payload.children) return []

      if (payload.state && payload.state.breadcrumb === "reset") {
        breadcrumbs = []
      } else {
        const idx = breadcrumbs.findIndex(
          crumb => crumb.children === payload.children
        )
        if (idx !== -1) breadcrumbs = breadcrumbs.slice(0, idx)
      }

      return breadcrumbs.concat([payload])
    }
    default: {
      throw new Error("Unexpected type: " + type)
    }
  }
}
