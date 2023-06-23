import { useContext, useState } from 'react'
import { CoffeeBarContext, headFilter } from '../../context/CoffeeBarContext'
import { HeaderFilter } from './styles'

export function Filter() {
  const { findFilter, setFindFilter } = useContext(CoffeeBarContext)
  const [filteredItem, setFilteredItem] = useState('')

  function handleFindFilter(item: string) {
    if (filteredItem !== item) {
      const findHeadFilter = findFilter.filter(
        (filterItem: string) => filterItem === item,
      )
      setFindFilter(findHeadFilter)
      setFilteredItem(item)
    } else {
      setFindFilter(headFilter)
      setFilteredItem('')
    }
  }
  console.log(filteredItem)

  return (
    <div>
      <HeaderFilter>
        {findFilter.map((item, i) => (
          <button key={i} onClick={() => handleFindFilter(item)}>
            {item}
          </button>
        ))}
      </HeaderFilter>
    </div>
  )
}
