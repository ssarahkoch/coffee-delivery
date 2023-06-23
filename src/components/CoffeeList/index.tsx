import { BarContainer, BaseBar, Price, Filter, Cart } from './styles'
import { Coffee } from '../../context/CoffeeBarContext'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Counter } from '../Counter'
import React from 'react'

interface CoffeeListProps {
  filteredCoffeeList: Coffee[]
  scrollToTop: () => void
  handleAddCoffeeCart: (item: Coffee) => void
}

const CoffeeList: React.FC<CoffeeListProps> = ({
  filteredCoffeeList,
  scrollToTop,
  handleAddCoffeeCart,
}) => {
  return (
    <>
      {filteredCoffeeList.map((item) => (
        <BarContainer key={item.id} id={item.id}>
          <img src={item.image} alt="" />
          <Filter>
            {item.filter.map((filterItem, index) => (
              <strong key={index}>{filterItem}</strong>
            ))}
          </Filter>
          <h3>{item.name}</h3>
          <a>{item.description}</a>
          <BaseBar>
            <Price>
              R$<span>{item.price.toFixed(2).replace('.', ',')}</span>
            </Price>
            <Counter counterValue={item} />
            <Cart>
              <button
                disabled={item.pointerValidation}
                onClick={() => {
                  handleAddCoffeeCart(item)
                  scrollToTop()
                }}
                title={
                  item.pointerValidation === true
                    ? 'Você já adicionou o item no carrinho'
                    : undefined
                }
              >
                <ShoppingCartSimple weight="fill" size={20} />
              </button>
            </Cart>
          </BaseBar>
        </BarContainer>
      ))}
    </>
  )
}

export default CoffeeList
