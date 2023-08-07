import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 32.875rem 30.75rem;
  margin-top: 5rem;
  justify-content: space-between;
  align-items: flex-end;
`
export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const DeliveryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid transparent;
  background:
    linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  color: ${(props) => props.theme['gray-700']};
  font-size: 1rem;
`
export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 130%;

  p {
    font-size: 1rem;
    line-height: 130%;
  }
`
