import { useState } from 'react'
// import { splitNumbers } from '../utils/calculation'

export function useCalculate() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(0)

  const onClick = (buttonValue: string) => {
    const newValue = value + buttonValue

    if (buttonValue === '=') {
      try {
        const result = eval(value)
        setValue(result.toLocaleString('en-US'))
      } catch (error) {
        setError((prevState) => prevState + 1)
        console.log('error')
      }

      return
    }

    if (buttonValue === 'C') {
      setValue('')

      return
    }

    if (buttonValue === '<-') {
      if (value.length > 0) setValue((value) => value.slice(0, -1))
      return
    }

    if (!isNaN(Number(buttonValue))) {
      const splitValues = newValue.split(/([^\d,.]+)/)
      console.log({ splitValues })
      // const lastValue = Number(
      //   splitValues[splitValues.length - 1].replace(/,/g, '')
      // ).toLocaleString('en-US', {
      //   minimumFractionDigits: 1,
      //   maximumFractionDigits: 10,
      // })

      let lastValue = splitValues[splitValues.length - 1].replace(/,/g, '')

      if (
        lastValue.includes('.') &&
        lastValue.split('.').slice(-1)[0].length >= 1
      ) {
        console.log(lastValue)

        lastValue = Number(lastValue).toLocaleString('en-US', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 10,
        })

        console.log(lastValue)
      } else {
        lastValue = Number(lastValue).toLocaleString('en-US')
      }

      const joinValues = splitValues.slice(0, -1).concat(lastValue).join('')

      setValue(joinValues)

      return
    }

    if (value.length === 0) return

    if (isNaN(Number(value[value.length - 1])) && value.length > 0) return

    const splitValues = value.split(/([^\d,.]+)/)
    const lastValue = splitValues[splitValues.length - 1]

    if (buttonValue === '.' && lastValue.includes('.')) return

    setValue(newValue)
  }

  return { value, onClick, error }
}
