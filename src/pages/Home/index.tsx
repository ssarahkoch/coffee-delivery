// import { useContext } from 'react'
import { CoffeeBar } from '../../components/CoffeeBar'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { Slider } from './Slider'
import { HeaderBar, ProductList, ProdutContainer } from './styles'
// import { CoffeeBarContext } from '../../context/CoffeeBarContext'

export function Home() {
  // const { coffeeList } = useContext(CoffeeBarContext)

  return (
    <div>
      <Header />
      <Slider />
      <HeaderBar>
        <h1>Nossos Cafés</h1>
        <Filter />
      </HeaderBar>
      <ProdutContainer>
        <ProductList>
          <CoffeeBar />
        </ProductList>
      </ProdutContainer>
    </div>
  )
}
