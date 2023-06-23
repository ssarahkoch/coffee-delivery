import { Coffee, CoffeeBarContext } from '../../context/CoffeeBarContext'
import { useContext, useMemo } from 'react'
import CoffeeList from '../CoffeeList'

export function CoffeeBar() {
  const {
    coffeeList,
    setCoffeeList,
    handleSelectCoffee,
    setHandleSelectCoffee,
    findFilter,
  } = useContext(CoffeeBarContext)
  const addPrice = 9.9

  function scrollToTop(): void {
    const currentPosition: number = window.pageYOffset
    const distance: number = currentPosition
    const duration: number = 500 // duração da animação em milissegundos
    const startTime: number = performance.now()

    function animateScroll(timestamp: number): void {
      const elapsed: number = timestamp - startTime
      const progress: number = Math.min(elapsed / duration, 1)
      const easeInOut: number = 0.5 * (1 - Math.cos(Math.PI * progress))

      window.scrollTo(0, currentPosition - distance * easeInOut)

      if (elapsed < duration) {
        window.requestAnimationFrame(animateScroll)
      }
    }

    window.requestAnimationFrame(animateScroll)
  }

  function handleAddCoffeeCart(item: Coffee) {
    const saveSelectCoffee = coffeeList.find((coffee) => coffee.id === item.id)
    console.log(item.counterCart)
    let selectedCoffeeData
    if (saveSelectCoffee) {
      selectedCoffeeData = {
        name: saveSelectCoffee.name,
        price: saveSelectCoffee.price,
        counterCart: saveSelectCoffee.counterCart,
        counter: saveSelectCoffee.counter,
        id: saveSelectCoffee.id,
        image: saveSelectCoffee.image,
      }
    }

    localStorage.setItem('selectedCoffee', JSON.stringify(selectedCoffeeData))

    const storedCoffeeDataString = localStorage.getItem('selectedCoffee')
    if (storedCoffeeDataString) {
      const storedCoffeeData = JSON.parse(storedCoffeeDataString)
      setHandleSelectCoffee([...handleSelectCoffee, storedCoffeeData])
    }
    if (saveSelectCoffee) {
      const updatedCoffeeCart = coffeeList.map((coffee) => {
        if (coffee.id === item.id) {
          return {
            ...coffee,
            price: addPrice,
            counter: 1,
            pointerValidation: true,
          }
        }
        return coffee
      })
      setHandleSelectCoffee([...handleSelectCoffee, saveSelectCoffee])
      setCoffeeList(updatedCoffeeCart)
    }
  }

  const filteredCoffeList = useMemo(
    () =>
      coffeeList.filter((item) =>
        item.filter.some((filterItem) => findFilter.includes(filterItem)),
      ),
    [coffeeList, findFilter],
  )

  if (filteredCoffeList.length === 0) {
    return <h4>Não foi encontrado nenhum item</h4>
  }

  return (
    <div>
      <CoffeeList
        filteredCoffeeList={filteredCoffeList}
        handleAddCoffeeCart={handleAddCoffeeCart}
        scrollToTop={scrollToTop}
      />
    </div>
  )
}
