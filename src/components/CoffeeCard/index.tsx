import { useContext } from 'react'

import { NavLink } from 'react-router-dom'

import { CheckoutContext, CoffeesProps } from '../../contexts/CheckoutContext'

import { priceFormatter } from '../../utils/priceFormatter'

import {
  CartButton,
  Container,
  ImageAndDescription,
  PriceAndQuantityContainer,
  PriceContainer,
  QuantityBox,
  QuantityButton,
  QuantityContainer,
  TypeBox,
  TypesContainer,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CoffeeCard(coffee: CoffeesProps) {
  const {
    cartCoffees,
    handleIncreaseCoffeeQuantity,
    handleDecreaseCoffeeQuantity,
  } = useContext(CheckoutContext)

  const coffeeAlreadyAddedToCart = cartCoffees.find(
    (cartCoffee) => cartCoffee.id === coffee.id,
  )

  return (
    <Container>
      <ImageAndDescription>
        <img src={coffee.urlImage} alt="" />

        <TypesContainer>
          <TypeBox>
            <span>{coffee.type[0].toUpperCase()}</span>
          </TypeBox>

          {coffee.type.length > 1 && (
            <TypeBox>
              <span>{coffee.type[1].toUpperCase()}</span>
            </TypeBox>
          )}

          {coffee.type.length > 2 && (
            <TypeBox>
              <span>{coffee.type[2].toUpperCase()}</span>
            </TypeBox>
          )}
        </TypesContainer>

        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
      </ImageAndDescription>

      <PriceAndQuantityContainer>
        <PriceContainer>
          <span>R$</span>
          <strong>{priceFormatter(coffee.price)}</strong>
        </PriceContainer>

        <QuantityContainer>
          <QuantityBox>
            <QuantityButton
              onClick={() => handleDecreaseCoffeeQuantity(coffee)}
            >
              <Minus />
            </QuantityButton>
            {coffeeAlreadyAddedToCart ? (
              <span>{coffeeAlreadyAddedToCart.quantity}</span>
            ) : (
              <span>{coffee.quantity}</span>
            )}
            <QuantityButton
              onClick={() => handleIncreaseCoffeeQuantity(coffee)}
            >
              <Plus />
            </QuantityButton>
          </QuantityBox>

          <NavLink to="/checkout">
            <CartButton>
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </NavLink>
        </QuantityContainer>
      </PriceAndQuantityContainer>
    </Container>
  )
}
