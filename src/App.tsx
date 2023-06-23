import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobolStyle } from './styles/themes/global'
import { Router } from './Router'
import { CoffeeBarProvider } from './context/CoffeeBarContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeBarProvider>
          <Router />
        </CoffeeBarProvider>
      </BrowserRouter>
      <GlobolStyle />
    </ThemeProvider>
  )
}
