import {
  HeaderContainer,
  Counter,
  CartHeader,
  CounterNumber,
  LocationHeader,
} from './styles'
import Logo from '../../assets/header/Logo.svg'

import { useContext } from 'react'
import { Coffee, CoffeeBarContext } from '../../context/CoffeeBarContext'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Header() {
  const { handleSelectCoffee, setOrderAddress, setSelectedPaymentButton } =
    useContext(CoffeeBarContext)
  const findHowManyCoffee = handleSelectCoffee.map((item: Coffee) => {
    return item
  }).length
  const handleLinkClick = () => {
    setOrderAddress(null)
    setSelectedPaymentButton('')
  }

  return (
    <HeaderContainer>
      <nav>
        <Link to="/" onClick={handleLinkClick}>
          <img src={Logo} alt="" />
        </Link>
      </nav>
      <LocationHeader>
        <MapPin size={22} weight="fill" />
        <span>Santa Catarina, SC</span>
      </LocationHeader>

      <CartHeader>
        <Link to="/Cart">
          <button>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </Link>
      </CartHeader>
      <Counter>
        {findHowManyCoffee > 0 ? (
          <CounterNumber>{findHowManyCoffee}</CounterNumber>
        ) : undefined}
      </Counter>
    </HeaderContainer>
  )
}
