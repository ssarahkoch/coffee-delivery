import { createGlobalStyle } from 'styled-components'

export const GlobolStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
:focus{
  outline: 0;
}
body {
  background: ${(props) => props.theme.background} ;
  color: ${(props) => props.theme.text};
  -webkit-font-smoothing: antialiased;
}
 body, input, textearea, button {
  /* font-family: 'Baloo 2', cursive; */
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
} 
`
