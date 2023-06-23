import styled from 'styled-components'

export const HeaderFilter = styled.div`
  button {
    background: transparent;
    font-weight: 800;
    border: 2px solid ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 7px 0.626rem;
    border-radius: 0.9375rem;
    font-size: 0.6875rem;
    margin-right: 0.3125rem;
    cursor: pointer;
  }
`
export const FilterCard = styled.div`
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
