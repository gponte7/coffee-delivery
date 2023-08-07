import { useContext } from 'react'

import { NavLink } from 'react-router-dom'

import { CheckoutContext } from '../../contexts/CheckoutContext'

import {
  CartBox,
  CartQuantity,
  Container,
  MapAndCartContainer,
  MapBox,
} from './styles'

import logoImage from '../../assets/logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  const { cartCoffees, address } = useContext(CheckoutContext)

  return (
    <Container>
      <NavLink to="/">
        <img src={logoImage} alt="" />
      </NavLink>
      <MapAndCartContainer>
        <MapBox>
          <MapPin weight="fill" size={22} />

          {address?.cidade ? <span>{address?.cidade}, </span> : null}
          {address?.uf ? <span>{address?.uf}</span> : null}
        </MapBox>

        <NavLink to="/checkout">
          <CartBox>
            <ShoppingCart weight="fill" size={22} />
            {cartCoffees.length > 0 && (
              <CartQuantity>
                <span>{cartCoffees.length}</span>
              </CartQuantity>
            )}
          </CartBox>
        </NavLink>
      </MapAndCartContainer>
    </Container>
  )
}
