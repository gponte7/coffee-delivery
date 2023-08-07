import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { CheckoutContextProvider } from './contexts/CheckoutContext'

import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
