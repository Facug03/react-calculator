export const splitNumbers = (value: string) => {
  return value.split(/([^\d,.]+)/)
}

export const stringToNumberFormat = (value: string) => {
  return value.replace(/,/g, '')
}
