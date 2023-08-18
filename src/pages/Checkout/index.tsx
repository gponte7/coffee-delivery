import { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { priceFormatter } from '../../utils/priceFormatter'

import {
  CheckoutFormData,
  CheckoutContext,
  checkoutFormSchema,
} from '../../contexts/CheckoutContext'

import { CartCoffeeCard } from '../../components/CartCoffeeCard'

import {
  AddressAndPaymentContainer,
  AddressContainer,
  AddressIcon,
  AddressInputsContainer,
  BaseBoxTitles,
  BoxTitles,
  CartContainer,
  CepInput,
  CityInput,
  ComplementoInput,
  ConfirmOrderButton,
  Container,
  DeliveryPrice,
  InputErrorMessage,
  NeighborhoodAndCityInputsContainer,
  NeighborhoodInput,
  NumberAndComplementInputsContainer,
  NumeroInput,
  OrderAndCartContainer,
  PaymentContainer,
  PaymentMethodBox,
  PaymentTitleIcon,
  PaymentsMethodsContainer,
  RuaInput,
  TitlesContainer,
  TotalContainer,
  TotalItens,
  TotalPrice,
  UFinput,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { cepFormatter } from '../../utils/cepFormatter'

export function Checkout() {
  const [paymentMethod, setPaymentMethod] =
    useState<string>('Cartão de Crédito')

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [cepFormatted, setCepFormatted] = useState<string>()
  const [rua, setRua] = useState<string>()
  const [bairro, setBairro] = useState<string>()
  const [cidade, setCidade] = useState<string>()
  const [uf, setUf] = useState<string>()

  const { cartCoffees, setAddress, setCartCoffees } =
    useContext(CheckoutContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  })

  function handleCepFormatter(event: React.ChangeEvent<HTMLInputElement>) {
    setCepFormatted(cepFormatter(event.target.value))
  }

  function checkCep() {
    const cep = cepFormatted?.replace(/\D/g, '')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setRua(data.logradouro)
        setBairro(data.bairro)
        setCidade(data.localidade)
        setUf(data.uf)
        setAddress({
          bairro: '',
          cep: '',
          numero: '',
          complemento: '',
          pagamento: '',
          rua: '',
          cidade: data.localidade,
          uf: data.uf,
        })
      })
  }

  function handleCheckoutSubmit(data: CheckoutFormData) {
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      data.pagamento = paymentMethod

      setAddress(data)

      setCartCoffees([])

      navigate('/success')
    }, 2000)
  }

  const totalItemsPrice = cartCoffees.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  )

  const deliveryPrice = 3.5

  const totalPrice = priceFormatter(totalItemsPrice + deliveryPrice)

  return (
    <Container onSubmit={handleSubmit(handleCheckoutSubmit)}>
      <OrderAndCartContainer>
        <AddressAndPaymentContainer>
          <BoxTitles>Complete seu pedido</BoxTitles>
          <AddressContainer>
            <TitlesContainer>
              <AddressIcon>
                <MapPinLine size={22} />
              </AddressIcon>
              <BaseBoxTitles>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </BaseBoxTitles>
            </TitlesContainer>

            <AddressInputsContainer>
              <div>
                <CepInput
                  type="text"
                  placeholder="CEP"
                  maxLength={9}
                  value={cepFormatted}
                  {...register('cep', {
                    value: cepFormatted,
                    onChange: handleCepFormatter,
                  })}
                  onBlur={checkCep}
                />
              </div>
              <RuaInput
                type="text"
                placeholder="Rua"
                value={rua}
                {...register('rua', {
                  value: rua,
                })}
              />

              <NumberAndComplementInputsContainer>
                <NumeroInput
                  type="text"
                  placeholder="Número"
                  {...register('numero')}
                />

                <ComplementoInput
                  type="text"
                  placeholder="Complemento (opcional)"
                  {...register('complemento')}
                />
              </NumberAndComplementInputsContainer>

              <NeighborhoodAndCityInputsContainer>
                <NeighborhoodInput
                  type="text"
                  placeholder="Bairro"
                  value={bairro}
                  {...register('bairro', {
                    value: bairro,
                  })}
                />
                <CityInput
                  type="text"
                  placeholder="Cidade"
                  value={cidade}
                  {...register('cidade', {
                    value: cidade,
                  })}
                />
                <UFinput
                  type="text"
                  placeholder="UF"
                  value={uf}
                  maxLength={2}
                  minLength={2}
                  {...register('uf', {
                    value: uf,
                  })}
                />
              </NeighborhoodAndCityInputsContainer>
            </AddressInputsContainer>

            {errors.cep && (
              <InputErrorMessage>{errors.cep.message}</InputErrorMessage>
            )}
            {errors.rua && (
              <InputErrorMessage>{errors.rua.message}</InputErrorMessage>
            )}
            {errors.numero && (
              <InputErrorMessage>{errors.numero.message}</InputErrorMessage>
            )}
            {errors.bairro && (
              <InputErrorMessage>{errors.bairro.message}</InputErrorMessage>
            )}
            {errors.cidade && (
              <InputErrorMessage>{errors.cidade.message}</InputErrorMessage>
            )}
            {errors.uf && (
              <InputErrorMessage>{errors.uf.message}</InputErrorMessage>
            )}
          </AddressContainer>

          <PaymentContainer>
            <TitlesContainer>
              <PaymentTitleIcon>
                <CurrencyDollar size={22} />
              </PaymentTitleIcon>
              <BaseBoxTitles>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </BaseBoxTitles>
            </TitlesContainer>

            <PaymentsMethodsContainer
              value={paymentMethod}
              onValueChange={setPaymentMethod}
            >
              <PaymentMethodBox
                value="Cartão de Crédito"
                {...register('pagamento')}
              >
                <CreditCard />
                <span>CARTÃO DE CRÉDITO</span>
              </PaymentMethodBox>

              <PaymentMethodBox
                value="Cartão de Débito"
                {...register('pagamento')}
              >
                <Bank />
                <span>CARTÃO DE DÉBITO</span>
              </PaymentMethodBox>

              <PaymentMethodBox value="Dinheiro" {...register('pagamento')}>
                <Money />
                <span>DINHEIRO</span>
              </PaymentMethodBox>
            </PaymentsMethodsContainer>

            {errors.pagamento ? (
              <InputErrorMessage>
                O método de pagamento deve ser selecionado.
              </InputErrorMessage>
            ) : null}
          </PaymentContainer>
        </AddressAndPaymentContainer>

        <div>
          <BoxTitles>Cafés selecionados</BoxTitles>

          <CartContainer>
            {cartCoffees.map((cartCoffee) => {
              return (
                <CartCoffeeCard
                  key={cartCoffee.id}
                  id={cartCoffee.id}
                  name={cartCoffee.name}
                  description={cartCoffee.description}
                  price={cartCoffee.price}
                  quantity={cartCoffee.quantity}
                  type={cartCoffee.type}
                  urlImage={cartCoffee.urlImage}
                />
              )
            })}

            <TotalContainer>
              <TotalItens>
                <span>Total de itens</span>
                <span>{`R$ ${priceFormatter(totalItemsPrice)}`}</span>
              </TotalItens>

              <DeliveryPrice>
                <span>Entrega</span>
                <span>
                  {`R$ ${
                    cartCoffees.length === 0
                      ? priceFormatter(0)
                      : priceFormatter(deliveryPrice)
                  }`}
                </span>
              </DeliveryPrice>

              <TotalPrice>
                <strong>Total</strong>
                <strong>
                  {`R$ ${
                    cartCoffees.length === 0 ? priceFormatter(0) : totalPrice
                  }`}
                </strong>
              </TotalPrice>
            </TotalContainer>

            <ConfirmOrderButton
              type="submit"
              disabled={isSubmitting || cartCoffees.length === 0}
              title={
                cartCoffees.length === 0
                  ? 'Selecione pelo menos um café para confirmar o pedido'
                  : 'Confirmar'
              }
            >
              {isSubmitting ? 'Confirmando...' : 'Confirmar pedido'}
            </ConfirmOrderButton>
          </CartContainer>
        </div>
      </OrderAndCartContainer>
    </Container>
  )
}
