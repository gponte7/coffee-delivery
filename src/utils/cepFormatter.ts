export function cepFormatter(cep: string) {
  return cep.replace(/(\d{5})(\d)/, '$1-$2')
}
