import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  a {
    font-size: 1.25rem;
  }
`

export const Tittle = styled.h1`
  font-family: 'baloo 2', 'cursive';
  color: ${(props) => props.theme['yellow-dark']};
`
export const AlignEachLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
`
export const OrderSuccessCart = styled.div`
  margin-top: 3rem;

  border: 1px transparent;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-style: solid;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    )
    border-box;
`
export const BorderRadius = styled.div`
  border: 1px transparent;
  padding: 0 1rem 1rem 1rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-style: solid;
  background: ${(props) => props.theme.background};
  height: 100%;

  span {
    display: inline-flexbox;
    align-items: center;
    margin-top: 1rem;
    width: 390px;
    padding: 0 0.5rem;
    strong {
      padding: 0 5px;
    }
    a {
      font-size: 1rem;
      font-weight: 800;
      display: flex;
    }
  }
`

const IconStyles = styled.div`
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;

  display: flex;

  border-radius: 9999px;
  color: ${(props) => props.theme.white};
`
export const MapStyles = styled(IconStyles)`
  background: ${(props) => props.theme.purple};
`
export const TimerStyles = styled(IconStyles)`
  background: ${(props) => props.theme.yellow};
`
export const DollarStyles = styled(IconStyles)`
  background: ${(props) => props.theme['yellow-dark']};
`
