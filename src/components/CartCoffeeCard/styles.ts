import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  & + & {
    padding-top: 1.5rem;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const InfoAndQuantity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CoffeeQuantityAndRemoveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const RemoveCoffeeButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  border: none;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
  transition: 0.1s;

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['purple-dark']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
