import { useState } from 'react'
import { splitNumbers, stringToNumberFormat } from '../utils/calculation'

export function useCalculate() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(0)

  const onClick = (buttonValue: string) => {
    const newValue = value + buttonValue

    if (buttonValue === '=') {
      try {
        const formatedValue = splitNumbers(value).map(stringToNumberFormat).join('')
        const result: number = eval(formatedValue)

        const resultToString = result.toString()

        if (resultToString.includes('.')) {
          const lastValue = resultToString.split('.').slice(-1)[0]

          setValue(
            result.toLocaleString('en-US', {
              minimumFractionDigits: lastValue.length > 10 ? 10 : lastValue.length,
            })
          )
        } else {
          setValue(result.toLocaleString('en-US'))
        }
      } catch (error) {
        setError((prevState) => prevState + 1)
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
      const splitValues = splitNumbers(newValue)
      let lastValue = stringToNumberFormat(splitValues[splitValues.length - 1])

      if (lastValue.includes('.') && lastValue.split('.').slice(-1)[0].length >= 1) {
        lastValue = Number(lastValue).toLocaleString('en-US', {
          minimumFractionDigits: lastValue.split('.').slice(-1)[0].length,
        })
      } else {
        lastValue = Number(lastValue).toLocaleString('en-US')
      }

      const joinValues = splitValues.slice(0, -1).concat(lastValue).join('')
      setValue(joinValues)

      return
    }

    if (value.length === 0) return

    if (isNaN(Number(value[value.length - 1])) && value.length > 0) return

    const splitValues = splitNumbers(value)
    const lastValue = splitValues[splitValues.length - 1]

    if (buttonValue === '.' && lastValue.includes('.')) return

    setValue(newValue)
  }

  return { value, onClick, error }
}
