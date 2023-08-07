import { styled } from 'styled-components'

import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.form``
export const BoxTitles = styled.h1`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 1rem;
`

export const BaseAddressAndPaymentcontainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 0.75rem;
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const TitlesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const BaseBoxTitles = styled.div`
  span {
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const BaseTotalItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OrderAndCartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
  margin-top: 2.5rem;
`
export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddressContainer = styled(BaseAddressAndPaymentcontainer)``

export const AddressIcon = styled.div`
  color: ${(props) => props.theme['yellow-dark']};
`

export const AddressInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['yellow-dark']};
`

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`

export const RuaInput = styled(BaseInput)`
  display: flex;
  flex: 1;
`

export const NumberAndComplementInputsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const NumeroInput = styled(BaseInput)`
  width: 12.5rem;
`

export const ComplementoInput = styled(BaseInput)`
  display: flex;
  flex: 1;
`

export const NeighborhoodAndCityInputsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const NeighborhoodInput = styled(BaseInput)`
  width: 12.5rem;
`
export const CityInput = styled(BaseInput)`
  display: flex;
  flex: 1;
`

export const UFinput = styled(BaseInput)`
  width: 3.75rem;
`
export const PaymentContainer = styled(BaseAddressAndPaymentcontainer)``

export const PaymentTitleIcon = styled.div`
  color: ${(props) => props.theme.purple};
`

export const PaymentsMethodsContainer = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`
export const PaymentMethodBox = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.1s;

  padding: 1rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  &[data-state='checked'] {
    border-color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
  }

  @media (max-width: 1440px) {
    flex: initial;
  }
`
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
`
export const TotalItens = styled(BaseTotalItens)``

export const DeliveryPrice = styled(BaseTotalItens)``

export const TotalPrice = styled(BaseTotalItens)`
  font-size: 1.25rem;
`
export const ConfirmOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem;
  background: ${(props) => props.theme.yellow};
  border-radius: 6px;
  border: none;

  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 160%;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.1s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
