import styled from 'styled-components'

export const BarContainer = styled.div`
  height: 19.37rem;
  width: 16rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 4.25rem;
  gap: 0.3rem;

  border-top-right-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;

  background: ${(props) => props.theme.card};

  img:first-child {
    margin-top: -30px;
    padding-bottom: 1rem;
  }
  img:last-child {
    cursor: pointer;
  }
  img:last-child:hover {
    background: red;
  }

  a {
    padding: 0.5rem 1rem 0.626rem 1.5625rem;
    justify-content: center;
    font-size: 0.875rem;
    text-align: initial;
  }
`
export const Filter = styled.div`
  padding-bottom: 1rem;

  strong {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.3125rem 0.626rem;
    border-radius: 0.9375rem;
    font-size: 0.6875rem;
    margin-right: 0.3125rem;
  }
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0;
  position: static;
  border: 0.626rem solid transparent;

  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const BaseBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 0.5rem;
`

export const Cart = styled.div`
  button {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    align-items: center;
    display: -webkit-inline-flex;
    cursor: pointer;
    border: 0;
  }
  button:not(:disabled):hover {
    background: ${(props) => props.theme.purple};
  }
  button:disabled {
    cursor: not-allowed;
  }
`
