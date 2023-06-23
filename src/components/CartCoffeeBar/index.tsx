import { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PaymentForm } from './PaymentForm'
import {
  CartCoffeeContainer,
  CoffeeItems,
  CounterContainer,
  FirstLine,
  Line,
  PageContainer,
  SecLine,
  TrashButton,
  OrderButton,
  TotalPrice,
  Order,
  ScrollStyles,
  EmpityCart,
} from './styles'
import { Coffee, CoffeeBarContext } from '../../context/CoffeeBarContext'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { AddressForm } from './AddressForm'
import { FormAlign } from './AddressForm/styles'
// import { Link } from 'react-router-dom'

export function CartCoffeeBar() {
  const {
    handleSelectCoffee,
    setHandleSelectCoffee,
    coffeeList,
    setCoffeeList,
    selectedPaymentButton,
    watchCep,
  } = useContext(CoffeeBarContext)
  const addPrice = 9.9
  const formRef = useRef<any>(null)

  function incrementCounterBar(item: Coffee) {
    const addNewPriceValue = item.price + addPrice
    const addNumInCounter = item.counterCart + 1

    const updatedCoffeeList = handleSelectCoffee.map((coffee) => {
      if (coffee.id === item.id) {
        return {
          ...coffee,
          price: addNewPriceValue,
          counterCart: addNumInCounter,
        }
      }
      return coffee
    })
    setHandleSelectCoffee(updatedCoffeeList)
    localStorage.setItem('selectedCoffee', JSON.stringify(updatedCoffeeList))
  }

  function decrementCounterBar(item: Coffee) {
    const removePriceValue = item.price - addPrice
    const removeNumInCounter = item.counterCart - 1
    const updatedCoffeeList = handleSelectCoffee.map((coffee) => {
      if (coffee.id === item.id) {
        return {
          ...coffee,
          price: removePriceValue,
          counterCart: removeNumInCounter,
        }
      }
      return coffee
    })

    setHandleSelectCoffee(updatedCoffeeList)
    localStorage.setItem('selectedCoffee', JSON.stringify(updatedCoffeeList))
  }
  function removeSelectCoffee(item: Coffee) {
    const returnCoffeeWithoutDeletedOne = handleSelectCoffee.filter(
      (coffee) => coffee.id !== item.id,
    )
    const changePointerValidation = coffeeList.map((coffee) => {
      if (item.id === coffee.id) {
        return { ...coffee, pointerValidation: false }
      }
      return coffee
    })

    localStorage.setItem(
      'selectedCoffee',
      JSON.stringify(returnCoffeeWithoutDeletedOne),
    )
    setCoffeeList(changePointerValidation)
    setHandleSelectCoffee(returnCoffeeWithoutDeletedOne)
  }

  const selectedCoffee = handleSelectCoffee.map((item) => item)
  const selectValue = selectedCoffee.reduce((accumulator, item) => {
    return accumulator + item.price
  }, 0)
  const cepIsBiggerThanSeven = watchCep.reduce((_accumulator, item) => {
    return item
  }, 0)

  const entrega = selectValue !== 0 && cepIsBiggerThanSeven !== 0 ? 3.9 : 0
  const selectTotalValue = selectValue + entrega

  const navigate = useNavigate()

  function handleFinishOrder() {
    formRef?.current?.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true }),
    )
    if (selectedPaymentButton !== '') {
      navigate('/Success')
      setHandleSelectCoffee([])
    }
    const updatedCoffeeList = coffeeList.map((item) => {
      return { ...item, pointerValidation: false }
    })
    setCoffeeList(updatedCoffeeList)
  }

  return (
    <PageContainer>
      <CartCoffeeContainer>
        <ScrollStyles>
          {selectValue !== 0 ? (
            handleSelectCoffee.map((item) => (
              <CoffeeItems key={item.id}>
                <FirstLine>
                  <img src={item.image} alt={item.name} />
                  <a>{item.name}</a>
                  <span>R$ {item.price.toFixed(2).replace('.', ',')}</span>
                </FirstLine>
                <SecLine>
                  <CounterContainer>
                    <button onClick={() => incrementCounterBar(item)}>
                      <Plus size={14} weight="bold" />
                    </button>
                    <span>{item.counterCart}</span>

                    <button
                      onClick={
                        item.counterCart !== 1
                          ? () => decrementCounterBar(item)
                          : undefined
                      }
                    >
                      <Minus size={14} weight="bold" />
                    </button>
                  </CounterContainer>
                  <TrashButton onClick={() => removeSelectCoffee(item)}>
                    <Trash size={15} weight="bold" />
                    <span>REMOVER</span>
                  </TrashButton>
                </SecLine>
                <Line />
              </CoffeeItems>
            ))
          ) : (
            <EmpityCart>
              <h2>Seu carrinho está vazio!</h2>
              <a>Navegue pelo nossos cafés e adicione no carrinho </a>
              <Link to="/">
                <button>Clique aqui e confira</button>
              </Link>
            </EmpityCart>
          )}
        </ScrollStyles>
        <Order>
          <TotalPrice>
            <span>
              Total de itens <a>R${selectValue.toFixed(2).replace('.', ',')}</a>
            </span>
            <span>
              Entrega <a>R${entrega.toFixed(2).replace('.', ',')}</a>
            </span>
            <h3>
              Total <a>R${selectTotalValue.toFixed(2).replace('.', ',')}</a>
            </h3>
          </TotalPrice>
          <OrderButton>
            <button
              type="submit"
              onClick={handleFinishOrder}
              disabled={selectValue === 0}
            >
              Confirmar Pedido
            </button>
          </OrderButton>
        </Order>
      </CartCoffeeContainer>
      <FormAlign>
        <AddressForm formRef={formRef} />
        <PaymentForm />
      </FormAlign>
    </PageContainer>
  )
}
