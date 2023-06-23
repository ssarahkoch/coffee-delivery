import styled from 'styled-components'

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
