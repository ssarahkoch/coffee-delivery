import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'
import { Coffee, CoffeeBarContext } from '../../context/CoffeeBarContext'
import { useContext } from 'react'

interface CounterProps {
  counterValue: Coffee
}

export function Counter({ counterValue }: CounterProps) {
  const { coffeeList, setCoffeeList } = useContext(CoffeeBarContext)

  const addPrice = 9.9

  function incrementCounterBar(item: Coffee) {
    const addNewPriceValue = item.price + addPrice
    const addNumInCounter = item.counter + 1

    const updatedCoffeeList = coffeeList.map((coffee) => {
      if (coffee.id === item.id) {
        return {
          ...coffee,
          price: addNewPriceValue,
          counter: addNumInCounter,
          counterCart: addNumInCounter,
        }
      }
      return coffee
    })

    setCoffeeList(updatedCoffeeList)
  }

  function decrementCounterBar(item: Coffee) {
    const removePriceValue = item.price - addPrice
    const removeNumInCounter = item.counter - 1

    const updatedCoffeeList = coffeeList.map((coffee) => {
      if (coffee.id === item.id) {
        return {
          ...coffee,
          price: removePriceValue,
          counter: removeNumInCounter,
          counterCart: removeNumInCounter,
        }
      }
      return coffee
    })

    setCoffeeList(updatedCoffeeList)
  }

  return (
    <CounterContainer>
      <button onClick={() => incrementCounterBar(counterValue)}>
        <Plus size={14} weight="bold" />
      </button>
      <span>{counterValue.counter}</span>

      <button
        onClick={
          counterValue.counter !== 1
            ? () => decrementCounterBar(counterValue)
            : undefined
        }
      >
        <Minus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
