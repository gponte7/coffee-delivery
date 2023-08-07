export function priceFormatter(price: number) {
  const priceFormatted = price.toFixed(2).replace('.', ',').toLocaleString()

  return priceFormatted
}
