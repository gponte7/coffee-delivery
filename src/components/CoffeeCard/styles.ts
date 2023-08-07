import { styled } from 'styled-components'

export const Container = styled.div`
  width: 16rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.25rem 1.25rem 1.25rem;

  background-color: ${(props) => props.theme['base-card']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`

export const ImageAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -2rem;
  margin-bottom: 2rem;
  gap: 0.75rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 130%;
  }
`

export const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const TypeBox = styled.div`
  max-width: fit-content;
  padding: 0.25rem 0.5rem;

  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;

  background-color: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
  font-weight: bold;
  font-size: 0.6rem;
`

export const PriceAndQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 0.2rem;

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
  }
`
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const QuantityBox = styled.div`
  background: ${(props) => props.theme['base-button']};

  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;

  span {
    color: ${(props) => props.theme['base-title']};
  }
`

export const QuantityButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CartButton = styled.button`
  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme['base-card']};
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border-radius: 6px;
  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme['purple-dark']};
  }
`
