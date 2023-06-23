import { ColumnWrapper, SliderContainer } from './styles'
import cafe from '../../../assets/slider/cafeSlider.svg'
import background from '../../../assets/slider/Background.svg'
import cafeItems from '../../../assets/slider/cafeItems.svg'
import compraItems from '../../../assets/slider/compraItems.svg'
import embalagemItems from '../../../assets/slider/embalagemItems.svg'
import entregaItems from '../../../assets/slider/entregaItems.svg'

export function Slider() {
  return (
    <SliderContainer style={{ backgroundImage: `url(${background})` }}>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <a>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </a>

        <ColumnWrapper>
          <img src={compraItems} alt="" />
          <span>Compra simples e segura</span>

          <img src={embalagemItems} alt="" />
          <span>Embalagem mantém o café intacto</span>

          <img src={entregaItems} alt="" />
          <span>Entrega rápida e rastreada</span>
          <img src={cafeItems} alt="" />
          <span>O café chega fresquinho até você</span>
        </ColumnWrapper>
      </div>
      <nav>
        <img src={cafe} alt="" />
      </nav>
    </SliderContainer>
  )
}
