import { useContext } from 'react'

import { CheckoutContext } from '../../contexts/CheckoutContext'

import { Header } from '../../components/Header'

import {
  Container,
  DeliveryInfoBox,
  DeliveryInfoContainer,
  InfosContainer,
} from './styles'

import { IconBox } from '../Home/styles'

import successImage from '../../assets/success-image.png'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  const { address } = useContext(CheckoutContext)

  return (
    <>
      <Header />
      <Container>
        <DeliveryInfoContainer>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>

          <DeliveryInfoBox>
            <InfosContainer>
              <IconBox variant="purple">
                <MapPin weight="fill" />
              </IconBox>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>{`${address?.rua}, ${address?.numero}`}</strong>
                  <div>{`${address?.bairro} - ${address?.cidade}, ${address?.uf}`}</div>
                </p>
              </div>
            </InfosContainer>

            <InfosContainer>
              <IconBox variant="yellow">
                <Timer weight="fill" />
              </IconBox>
              <div>
                <p>Previsão de Entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </InfosContainer>

            <InfosContainer>
              <IconBox variant="darkYellow">
                <CurrencyDollar />
              </IconBox>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{address?.pagamento}</strong>
              </div>
            </InfosContainer>
          </DeliveryInfoBox>
        </DeliveryInfoContainer>

        <div>
          <img src={successImage} alt="" />
        </div>
      </Container>
    </>
  )
}
