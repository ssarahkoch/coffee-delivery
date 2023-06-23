import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  padding: 1.5rem 10rem;

  nav {
    display: flex;
    flex: 1;
  }
`
export const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  padding: 0.5rem;
  border-radius: 6px;
  span {
    margin-left: 3px;
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
  }
`

export const Counter = styled.div`
  display: flex;
  padding-bottom: 2rem;
  margin-left: -0.9375rem;
`

export const CounterNumber = styled.span`
  display: flex;
  padding: 3px 7px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 999px;
  align-items: center;
  font-size: 0.6875rem;
`

export const CartHeader = styled.div`
  button {
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;
    display: -webkit-inline-flex;
    cursor: pointer;
    border: 0;
  }
`
