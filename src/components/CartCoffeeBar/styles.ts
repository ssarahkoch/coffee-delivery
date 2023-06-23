import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.9rem 10rem;

  gap: 0 2rem;
`
export const CartCoffeeContainer = styled.div`
  width: 28.6rem;
  height: 27rem;
  padding: 2rem 3rem;

  background: ${(props) => props.theme.card};
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const CoffeeItems = styled.div`
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 1rem;
`
export const ScrollStyles = styled.div`
  scrollbar-width: thin;

  overflow: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 155px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.button};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-corner {
    background-color: ${(props) => props.theme.card};
  }
`
export const Line = styled.div`
  height: 1.5px;
  background-color: ${(props) => props.theme.button};
  margin: 1rem;
`
export const FirstLine = styled.div`
  display: flex;
  align-items: top;

  gap: 0.3125rem;
  a {
    flex: 1;
    font-size: 1rem;
    padding: 5px 3px;
  }
  img {
    width: 4.37rem;
  }
  span:first-child {
    white-space: nowrap;
  }
  span {
    font-weight: 800;
    display: flex;
    padding: 5.5px;
    font-size: 0.875rem;
  }
`
export const SecLine = styled.div`
  display: flex;
  padding: 0 4.9rem;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: -36.9px;
`
export const CounterContainer = styled.div`
  background: ${(props) => props.theme.button};
  padding: 2px;
  width: 4.5rem;
  height: 2rem;
  border-radius: 6px;

  display: flex;
  align-items: center;

  button {
    display: flex;
    padding: 0.5rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
  button:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0.3125rem;
  font-size: 0.8125rem;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.button};
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  span {
    color: ${(props) => props.theme.subtitle};
  }

  &:hover:not(span) {
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme.hover};
  }
`
export const Order = styled.div`
  position: absolute;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

export const TotalPrice = styled.div`
  font-size: 0.875rem;
  line-height: 1.9;
  padding: 0.3rem;

  span,
  h3 {
    display: flex;
    justify-content: space-between;
    a {
      font-size: 1rem;
    }
  }
`
export const OrderButton = styled.div`
  button {
    width: 22rem;
    height: 2.87rem;
    cursor: pointer;
    border-radius: 0.5rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};
    border: none;
  }
  button:enabled:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
  button:disabled {
    cursor: not-allowed;
  }
`
export const EmpityCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  padding: 1rem;
  gap: 2rem;
  border-bottom: 2px solid ${(props) => props.theme.hover};

  button {
    border: none;
    cursor: pointer;
    text-decoration: underline;
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 18px;
  }
  button:hover {
    color: ${(props) => props.theme.yellow};
    font-size: 19px;
  }
`
