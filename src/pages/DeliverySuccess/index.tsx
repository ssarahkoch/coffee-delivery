import { Header } from '../../components/Header'
import Illustration from '../../assets/deliverySuccess/Illustration.svg'
import {
  Tittle,
  SuccessContainer,
  OrderSuccessCart,
  MapStyles,
  AlignEachLine,
  TimerStyles,
  DollarStyles,
  BorderRadius,
} from './styles'
import { useContext } from 'react'
import { CoffeeBarContext } from '../../context/CoffeeBarContext'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function DeliverySuccess() {
  const { orderAddress, selectedPaymentButton } = useContext(CoffeeBarContext)
  const payment =
    selectedPaymentButton === 'cartao-credito'
      ? 'Cartão de Crédito'
      : selectedPaymentButton === 'cartao-debito'
      ? 'Cartão de Débito'
      : selectedPaymentButton === 'dinheiro'
      ? 'Dinheiro'
      : ''

  return (
    <div>
      <Header />
      <SuccessContainer>
        <div>
          <Tittle>Uhu! Pedido confirmado</Tittle>
          <a>Agora é só aguardar que logo o café chegará até você</a>

          <OrderSuccessCart>
            <BorderRadius>
              <AlignEachLine>
                <MapStyles>
                  <MapPin size={16} weight="fill" />
                </MapStyles>
                <span>
                  Entrega em
                  <strong>
                    {orderAddress?.rua}, {orderAddress?.numero}
                  </strong>
                  <div>
                    {orderAddress?.bairro} - Santa Catarina, {orderAddress?.uf}
                  </div>
                </span>
              </AlignEachLine>
              <AlignEachLine>
                <TimerStyles>
                  <Timer size={16} weight="fill" />
                </TimerStyles>
                <span>
                  Previsão de entrega
                  <a>20 min - 30 min</a>
                </span>
              </AlignEachLine>
              <AlignEachLine>
                <DollarStyles>
                  <CurrencyDollar size={16} />
                </DollarStyles>
                <span>
                  Pagamento na entrega
                  <a>{payment}</a>
                </span>
              </AlignEachLine>
            </BorderRadius>
          </OrderSuccessCart>
        </div>
        <img alt="" src={Illustration} />
      </SuccessContainer>
    </div>
  )
}
