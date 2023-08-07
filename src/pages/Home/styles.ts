import { styled } from 'styled-components'

export type IconBoxVariant = 'darkYellow' | 'gray' | 'yellow' | 'purple'

interface IconBoxProps {
  variant: IconBoxVariant
}

const boxVariants = {
  darkYellow: '#C47F17',
  gray: '#574F4D',
  yellow: '#DBAC2C',
  purple: '#8047F8',
}

export const Container = styled.div`
  padding-bottom: 5rem;
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5.75rem 0;

  @media (max-width: 1440px) {
    padding: 5.75rem 0;

    img {
      min-width: 26.25rem;
      height: 22.5rem;
    }
  }
`

export const TitleContainer = styled.div`
  max-width: 36.75rem;
  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const IntroItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 15rem 19rem;
  margin-top: 4.125rem;
  flex-wrap: wrap;
  gap: 2rem;
`

export const IntroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
  }
`

export const IconBox = styled.div<IconBoxProps>`
  padding: 0.5rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.background};

  ${(props) => {
    return `background-color: ${boxVariants[props.variant]}`
  }};
`
export const CoffeeListTitle = styled.h1`
  font-family: 'Baloo 2';
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 2.125rem;
`

export const CoffeesCardsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`
