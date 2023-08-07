import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`
export const MapAndCartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`

export const MapBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.625rem 0.5rem;

  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  color: ${(props) => props.theme.purple};

  span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    text-transform: capitalize;
  }
`

export const CartBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
`
export const CartQuantity = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;

  position: absolute;
  margin-left: 2.3rem;
  margin-bottom: 2rem;
`
