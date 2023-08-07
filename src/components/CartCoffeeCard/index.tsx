import { useContext } from 'react'

import { CheckoutContext, CoffeesProps } from '../../contexts/CheckoutContext'

import { priceFormatter } from '../../utils/priceFormatter'

import {
  CoffeeQuantityAndRemoveContainer,
  Container,
  InfoAndQuantity,
  InfoContainer,
  RemoveCoffeeButton,
} from './styles'

import { QuantityBox, QuantityButton } from '../CoffeeCard/styles'

import { Minus, Plus, Trash } from 'phosphor-react'

export function CartCoffeeCard(cartCoffee: CoffeesProps) {
  const {
    handleIncreaseCoffeeQuantity,
    handleDecreaseCoffeeQuantity,
    handleRemoveCoffee,
  } = useContext(CheckoutContext)

  return (
    <Container>
      <InfoContainer>
        <img src={cartCoffee.urlImage} width={64} height={64} alt="" />
        <InfoAndQuantity>
          <span>{cartCoffee.name}</span>
          <CoffeeQuantityAndRemoveContainer>
            <QuantityBox>
              <QuantityButton
                type="button"
                onClick={() => handleDecreaseCoffeeQuantity(cartCoffee)}
              >
                <Minus />
              </QuantityButton>
              <span>{cartCoffee.quantity}</span>
              <QuantityButton
                type="button"
                onClick={() => handleIncreaseCoffeeQuantity(cartCoffee)}
              >
                <Plus />
              </QuantityButton>
            </QuantityBox>
            <RemoveCoffeeButton onClick={() => handleRemoveCoffee(cartCoffee)}>
              <Trash />
              <span>remover</span>
            </RemoveCoffeeButton>
          </CoffeeQuantityAndRemoveContainer>
        </InfoAndQuantity>
      </InfoContainer>
      <strong>R$ {priceFormatter(cartCoffee.price)}</strong>
    </Container>
  )
}
