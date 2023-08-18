import { render } from '@testing-library/react'
import { Header } from '.'
import { CheckoutContextProvider } from '../../contexts/CheckoutContext'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Header component', () => {
  it('should render correctly', () => {
    const { container, debug } = render(
      <CheckoutContextProvider>
        <Router>
          <Header />
        </Router>
      </CheckoutContextProvider>,
    )

    debug()

    expect(container.querySelector('img')).toBeTruthy()
  })
})
