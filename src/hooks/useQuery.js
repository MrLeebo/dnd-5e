import qs from "qs"

export default function useQuery(location) {
  return qs.parse(location.search, { ignoreQueryPrefix: true })
}
