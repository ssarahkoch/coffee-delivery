import styled from 'styled-components'

export const Tittle = styled.div`
  line-height: 1.6;
  color: ${(props) => props.theme.subtitle};
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
  span {
    display: flex;
    align-items: end;
    padding-right: 0.3rem;
    color: ${(props) => props.theme['yellow-dark']};
  }
  a {
    color: ${(props) => props.theme.text};
    padding: 0 1.7rem;
  }
`
export const ContainerForm = styled.div`
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 38rem;
  height: 21.125rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.card};

  h3 {
    position: relative;
    top: -1.875rem;
    font-family: 'baloo 2', 'cursive';
    font-size: 1.125rem;
    line-height: 1.6;
  }
`
export const FormAlign = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormStyled = styled.div`
  span {
    padding: 0.6rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  div {
    display: flex;
    gap: 0.75rem;
  }
  input {
    display: flex;
    padding-left: 0.5rem;

    font-size: 0.875rem;

    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.button};
    background: ${(props) => props.theme.input};

    height: 2.625rem;
    max-width: 100%;
  }
  input.tiny {
    width: 3.75rem;
  }
  input.small {
    width: 12.5rem;
  }
  input.medium {
    width: 16.625rem;
  }
  input.l-medium {
    width: 21.25rem;
  }

  input.large {
    width: 35rem;
  }
  input.error {
    border: 1px solid red;
    &:placeholder {
      color: red;
    }
  }
  input:focus:not(.error) {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
  div.error-message {
    font-style: italic;
    font-size: 12px;
    padding-top: 5px;
  }
`
