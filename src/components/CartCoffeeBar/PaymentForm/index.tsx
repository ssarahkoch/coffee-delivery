import { PaymentFormStyled, PaymentButtons } from './styles'
import { Tittle } from '../AddressForm/styles'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useContext } from 'react'
import {
  CoffeeBarContext,
  PaymentButton,
} from '../../../context/CoffeeBarContext'

export function PaymentForm() {
  const { selectedPaymentButton, setSelectedPaymentButton } =
    useContext(CoffeeBarContext)

  const handleButtonClick = (id: PaymentButton) => {
    setSelectedPaymentButton(id)
  }

  return (
    <PaymentFormStyled>
      <Tittle>
        <div>
          <span>
            <CurrencyDollar size={22} color="#8047F8" />
          </span>
          Endereço de Entrega
        </div>
        <a>Informe o endereço onde deseja receber seu pedido</a>
      </Tittle>
      <PaymentButtons>
        <button
          id="cartao-credito"
          className={selectedPaymentButton === 'cartao-credito' ? 'active' : ''}
          onClick={() => handleButtonClick('cartao-credito')}
        >
          <div>
            <CreditCard size={22} />
          </div>
          CARTÃO DE CRÉDITO
        </button>
        <button
          id="cartao-debito"
          className={selectedPaymentButton === 'cartao-debito' ? 'active' : ''}
          onClick={() => handleButtonClick('cartao-debito')}
        >
          <div>
            <Bank size={22} />
          </div>
          CARTÃO DE DÉBITO
        </button>
        <button
          id="dinheiro"
          className={selectedPaymentButton === 'dinheiro' ? 'active' : ''}
          onClick={() => handleButtonClick('dinheiro')}
        >
          <div>
            <Money size={22} />
          </div>
          DINHEIRO
        </button>
      </PaymentButtons>
    </PaymentFormStyled>
  )
}
