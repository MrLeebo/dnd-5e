import React from "react"
import { Index } from "elasticlunr"
const SearchContext = React.createContext()

export const SearchProvider = SearchContext.Provider

export default function useSearch(inputValue) {
  const searchIndex = React.useContext(SearchContext)
  const index = React.useMemo(() => Index.load(searchIndex), [searchIndex])

  return React.useMemo(
    () =>
      index
        .search(inputValue, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref)),
    [index, inputValue]
  )
}
