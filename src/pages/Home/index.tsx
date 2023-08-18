import { useContext, useEffect } from 'react'

import { api } from '../../lib/axios'

import { CheckoutContext } from '../../contexts/CheckoutContext'

import { CoffeeCard } from '../../components/CoffeeCard'

import {
  Container,
  IntroItem,
  IntroContainer,
  TitleContainer,
  IconBox,
  IntroItemsContainer,
  CoffeesCardsContainer,
  CoffeeListTitle,
} from './styles'

import homeImage from '../../assets/home-image.png'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Home() {
  const { coffees, setCoffees } = useContext(CheckoutContext)

  async function loadCoffees() {
    const response = await api.get('/coffees')

    setCoffees(response.data)
  }

  useEffect(() => {
    loadCoffees()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <IntroContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <IntroItemsContainer>
            <IntroItem>
              <IconBox variant="darkYellow">
                <ShoppingCart weight="fill" />
              </IconBox>
              <p>Compra simples e segura</p>
            </IntroItem>

            <IntroItem>
              <IconBox variant="gray">
                <Package weight="fill" />
              </IconBox>
              <p>Embalagem mantém o café intacto</p>
            </IntroItem>

            <IntroItem>
              <IconBox variant="yellow">
                <Timer weight="fill" />
              </IconBox>
              <p>Entrega rápida e rastreada</p>
            </IntroItem>

            <IntroItem>
              <IconBox variant="purple">
                <Coffee weight="fill" />
              </IconBox>
              <p>O café chega fresquinho até você</p>
            </IntroItem>
          </IntroItemsContainer>
        </TitleContainer>

        <img src={homeImage} alt="" />
      </IntroContainer>

      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

      <CoffeesCardsContainer>
        {coffees?.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              quantity={coffee.quantity}
              type={coffee.type}
              urlImage={coffee.urlImage}
            />
          )
        })}
      </CoffeesCardsContainer>
    </Container>
  )
}
