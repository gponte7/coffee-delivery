import { CoffeeCard } from '.'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CheckoutContextProvider } from '../../contexts/CheckoutContext'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Coffee Card component', () => {
  it('should render correctly', () => {
    const { getByText, debug } = render(
      <CheckoutContextProvider>
        <Router>
          <CoffeeCard
            description="test"
            id={1}
            name="test"
            price={1}
            quantity={1}
            type={['test']}
            urlImage="test"
          />
        </Router>
      </CheckoutContextProvider>,
    )

    debug()

    expect(getByText('R$')).toBeInTheDocument()
  })
})
