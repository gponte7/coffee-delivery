import { render } from '@testing-library/react'
import { CartCoffeeCard } from '.'

describe('CartCoffeeCard component', () => {
  it('should render correctly', () => {
    const { getByText, debug } = render(
      <CartCoffeeCard
        description="test"
        id={1}
        name="test"
        price={1}
        quantity={1}
        type={['test']}
        urlImage="test"
      />,
    )

    debug()

    expect(getByText('test')).toBeTruthy()
  })
})
