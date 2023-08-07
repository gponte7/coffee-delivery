import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    padding: 0 10rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
`
