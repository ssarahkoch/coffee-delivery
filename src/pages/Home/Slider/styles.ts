import styled from 'styled-components'

export const SliderContainer = styled.div`
  display: flex;
  padding: 1rem 10rem;

  nav > img {
    width: 28.125rem;
    height: 22.5rem;
  }
  h1,
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    color: ${(props) => props.theme.title};
    font-family: 'Baloo 2', cursive;
    font-size: 2.2rem;
  }
  a {
    line-height: 1.6;
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme.subtitle};
  }
`
export const ColumnWrapper = styled.span`
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.2fr 1fr;
  padding: 0.5rem;
  gap: 0.5rem;
  line-height: 1.6;
  align-items: center;
  margin-top: 1.87rem;
`
