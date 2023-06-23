import React, { ReactNode, createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import expressoTradicional from '../assets/coffeeBar/cafeExpressoTradicional.svg'
import expressoAmericano from '../assets/coffeeBar/CoffeeexpressoAmericano.svg'
import expressoCremoso from '../assets/coffeeBar/CoffeeexpressoCremoso.svg'
import expressoGelado from '../assets/coffeeBar/CoffeeexpressoGelado.svg'
import cafeComLeite from '../assets/coffeeBar/CoffeecafecomLeite.svg'
import latte from '../assets/coffeeBar/Coffeelatte.svg'
import capuccino from '../assets/coffeeBar/Coffeecapuccino.svg'
import macchiato from '../assets/coffeeBar/Coffeemacchiato.svg'
import mocaccino from '../assets/coffeeBar/Coffeemocaccino.svg'
import chocolateQuente from '../assets/coffeeBar/CoffeechocQuente.svg'
import cubano from '../assets/coffeeBar/CoffeeCubano.svg'
import havaiano from '../assets/coffeeBar/CoffeeHavaiano.svg'
import arabe from '../assets/coffeeBar/Coffeearabe.svg'
import irlandes from '../assets/coffeeBar/Coffeeirlandes.svg'

export interface Coffee {
  id: string
  filter: string[]
  name: string
  description: string
  image: string
  price: number
  counter: number
  counterCart: number
  pointerValidation: boolean
}
export interface Address {
  cep: number
  rua: string
  numero: number
  bairro: string
  complemento?: string
  cidade: string
  uf: string
}
export type PaymentButton = 'cartao-credito' | 'cartao-debito' | 'dinheiro'

interface CoffeeBarContextType {
  coffeeList: Coffee[]
  setCoffeeList: React.Dispatch<React.SetStateAction<Coffee[]>>
  handleSelectCoffee: Coffee[]
  setHandleSelectCoffee: React.Dispatch<React.SetStateAction<Coffee[]>>
  findFilter: string[]
  setFindFilter: React.Dispatch<React.SetStateAction<string[]>>
  orderAddress: Address | null
  setOrderAddress: React.Dispatch<React.SetStateAction<Address | null>>
  selectedPaymentButton: PaymentButton | string
  setSelectedPaymentButton: React.Dispatch<
    React.SetStateAction<PaymentButton | string>
  >
  watchCep: number[]
  setWatchCep: React.Dispatch<React.SetStateAction<number[]>>
}
interface CofffeeBarContextProviderProps {
  children: ReactNode
}
export const headFilter = [
  'TRADICIONAL',
  'COM LEITE',
  'GELADO',
  'ESPECIAL',
  'ALCOÓLICO',
]

const initialCoffeeList: Coffee[] = [
  {
    id: uuid(),
    name: 'Expresso tradicional',
    filter: ['TRADICIONAL'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expressoTradicional,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Expresso Americano',
    filter: ['TRADICIONAL'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: expressoAmericano,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },

  {
    id: uuid(),
    name: 'Expresso Cremoso',
    filter: ['TRADICIONAL'],
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Expresso Gelado',
    filter: ['TRADICIONAL', 'GELADO'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: expressoGelado,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },

  {
    id: uuid(),
    name: 'Café com leite',
    filter: ['TRADICIONAL', 'COM LEITE'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Latte',
    filter: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Capuccino',
    filter: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Macchiato',
    filter: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Mocaccino',
    filter: ['TRADICIONAL', 'COM LEITE'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Chocolate Quente',
    filter: ['ESPECIAL', 'COM LEITE'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Cubano',
    filter: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Havaiano',
    filter: ['ESPECIAL'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Árabe',
    filter: ['ESPECIAL'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
  {
    id: uuid(),
    name: 'Irlandês',
    filter: ['ESPECIAL', 'ALCOÓLICO'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes,
    price: 9.9,
    counter: 1,
    counterCart: 1,
    pointerValidation: false,
  },
]

export const CoffeeBarContext = createContext<CoffeeBarContextType>({
  coffeeList: [],
  setCoffeeList: () => {},
  handleSelectCoffee: [],
  setHandleSelectCoffee: () => {},
  findFilter: [],
  setFindFilter: () => {},
  orderAddress: null,
  setOrderAddress: () => {},
  selectedPaymentButton: '',
  setSelectedPaymentButton: () => {},
  watchCep: [],
  setWatchCep: () => {},
})

export function CoffeeBarProvider({
  children,
}: CofffeeBarContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>(initialCoffeeList)
  const [handleSelectCoffee, setHandleSelectCoffee] = useState<Coffee[]>([])
  const [findFilter, setFindFilter] = useState<string[]>(headFilter)
  const [orderAddress, setOrderAddress] = useState<Address | null>(null)
  const [selectedPaymentButton, setSelectedPaymentButton] = useState<
    PaymentButton | string
  >('')
  const [watchCep, setWatchCep] = useState<number[]>([0])

  return (
    <CoffeeBarContext.Provider
      value={{
        coffeeList,
        setCoffeeList,
        handleSelectCoffee,
        setHandleSelectCoffee,
        findFilter,
        setFindFilter,
        orderAddress,
        setOrderAddress,
        selectedPaymentButton,
        setSelectedPaymentButton,
        watchCep,
        setWatchCep,
      }}
    >
      {children}
    </CoffeeBarContext.Provider>
  )
}
