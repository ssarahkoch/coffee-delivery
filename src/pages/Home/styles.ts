import styled from 'styled-components'

export const HeaderBar = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 0 10rem;
  align-items: baseline;
  h1 {
    flex: 1;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme.subtitle};
  }
`

export const ProdutContainer = styled.div`
  display: flex;

  padding: 1rem 10rem;
  flex-direction: column;
`
export const ProductList = styled.div`
  & > * {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`
