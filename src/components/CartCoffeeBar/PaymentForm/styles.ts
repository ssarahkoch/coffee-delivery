import styled from 'styled-components'

export const FormAlign = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const PaymentFormStyled = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 2rem;
  display: flex;
  background: ${(props) => props.theme.card};
  width: 38rem;
  height: 12.5rem;
  border-radius: 0.5rem;
`
export const PaymentButtons = styled.div`
  display: flex;
  padding: 2rem 0;
  gap: 0.829rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 170px;
    height: 51px;
    font-size: 12px;

    background: ${(props) => props.theme.button};
    border-radius: 0.5rem;
    border: none;
    div {
      color: ${(props) => props.theme.purple};
    }
    &.active {
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }
`
