import { ReactNode, createContext, useState } from 'react'

import { z } from 'zod'

export interface CoffeesProps {
  id: number
  name: string
  description: string
  type: string[]
  urlImage: string
  quantity: number
  price: number
}

export const checkoutFormSchema = z.object({
  cep: z
    .string()
    .nonempty('Informe o CEP')
    .min(9, 'O CEP deve conter no mínimo 8 números')
    .refine((value) => /^[0-9]+$/.test(value.replace(/-/g, '')), {
      message: 'O CEP deve conter somente números.',
    }),
  rua: z.string().nonempty('Informe a rua'),
  numero: z
    .string()
    .nonempty('Informe o número')
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'O campo do número deve conter somente números',
    }),
  complemento: z.string().nullable(),
  bairro: z.string().nonempty('Informe o bairro'),
  cidade: z.string().nonempty('Informe a cidade'),
  uf: z
    .string()
    .nonempty('Informe a sigla do estado')
    .refine((value) => /^[a-zA-Z]{2}$/.test(value), {
      message: 'A UF deve conter exatamente 2 letras.',
    }),
  pagamento: z.string().nonempty(),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>

interface CheckoutContextProvider {
  coffees: CoffeesProps[]
  cartCoffees: CoffeesProps[]
  address: CheckoutFormData | undefined
  setAddress(address: CheckoutFormData): void
  setCoffees(coffees: CoffeesProps[]): void
  handleIncreaseCoffeeQuantity(coffeeId: CoffeesProps): void
  handleDecreaseCoffeeQuantity(coffeeId: CoffeesProps): void
  handleRemoveCoffee(coffeeId: CoffeesProps): void
  setCartCoffees(cartCoffees: CoffeesProps[]): void
}

export const CheckoutContext = createContext({} as CheckoutContextProvider)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeesProps[]>([])
  const [cartCoffees, setCartCoffees] = useState<CoffeesProps[]>([])
  const [address, setAddress] = useState<CheckoutFormData>()

  function handleIncreaseCoffeeQuantity(coffee: CoffeesProps) {
    setCartCoffees((prevState) => [...prevState, { ...coffee, quantity: 1 }])

    const coffeeAlreadyAddedToCart = cartCoffees.findIndex(
      ({ id }) => id === coffee.id,
    )

    if (coffeeAlreadyAddedToCart !== -1) {
      const updatedCoffees = cartCoffees.map((currentCoffee) => {
        if (currentCoffee.id === coffee.id) {
          return {
            ...currentCoffee,
            quantity: currentCoffee.quantity + 1,
          }
        }
        return currentCoffee
      })
      setCartCoffees(updatedCoffees)
    }
  }

  function handleDecreaseCoffeeQuantity(coffee: CoffeesProps) {
    const updatedCoffees = cartCoffees.map((currentCoffee) => {
      if (currentCoffee.id === coffee.id && currentCoffee.quantity > 0) {
        return {
          ...currentCoffee,
          quantity: currentCoffee.quantity - 1,
        }
      }
      return currentCoffee
    })

    setCartCoffees(updatedCoffees.filter((coffee) => coffee.quantity !== 0))
  }

  function handleRemoveCoffee(coffee: CoffeesProps) {
    const coffeesWithoutDeletedOne = cartCoffees.filter(
      (coffeeToRemove) => coffeeToRemove.id !== coffee.id,
    )

    setCartCoffees(coffeesWithoutDeletedOne)
  }

  return (
    <CheckoutContext.Provider
      value={{
        coffees,
        cartCoffees,
        address,
        setAddress,
        setCoffees,
        handleIncreaseCoffeeQuantity,
        handleDecreaseCoffeeQuantity,
        handleRemoveCoffee,
        setCartCoffees,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
