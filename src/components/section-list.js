import PropTypes from "prop-types"

SectionList.propTypes = {
  items: PropTypes.array.isRequired,
  section: PropTypes.func.isRequired,
  sectionValue: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
}

export default function SectionList(props) {
  const { items, section, sectionValue, children } = props

  if (!items || !items.length) return null

  const [head, ...rest] = items

  let previous = sectionValue(head)
  return rest.reduce(
    (list, item, idx) => {
      const val = sectionValue(item)
      if (val !== previous) list.push(section(val))
      list.push(children(item, idx + 1))
      previous = val
      return list
    },
    [section(previous), children(head, 0)]
  )
}
