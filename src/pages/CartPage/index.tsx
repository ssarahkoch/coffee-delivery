import { CartCoffeeBar } from '../../components/CartCoffeeBar'
import { Header } from '../../components/Header'
import { Tittles } from './styles'

export function CartPage() {
  return (
    <div>
      <Header />
      <Tittles>
        <h2>Complete seu pedido</h2>
        <h3>Cafés selecionados</h3>
      </Tittles>
      <CartCoffeeBar />
      Cart Page
    </div>
  )
}
