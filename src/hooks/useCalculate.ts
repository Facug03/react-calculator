import { useState } from 'react'
import { splitNumbers, stringToNumberFormat } from '../utils/calculation'

export function useCalculate() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(0)

  const onClick = (buttonValue: string) => {
    const newValue = value + buttonValue
    const splitValues = splitNumbers(value)

    switch (true) {
      case buttonValue === 'C':
        setValue('')
        break

      case buttonValue === '<-':
        setValue((value) => value.slice(0, -1))
        break

      case buttonValue === '=':
        try {
          const formatedValue = splitValues.map(stringToNumberFormat).join('')
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
        break

      case !isNaN(Number(buttonValue)):
        {
          const splitNewValues = splitNumbers(newValue)
          let lastValue = stringToNumberFormat(splitNewValues[splitNewValues.length - 1])

          if (lastValue.includes('.') && lastValue.split('.').slice(-1)[0].length >= 1) {
            lastValue = Number(lastValue).toLocaleString('en-US', {
              minimumFractionDigits: lastValue.split('.').slice(-1)[0].length,
            })
          } else {
            lastValue = Number(lastValue).toLocaleString('en-US')
          }

          const joinValues = splitNewValues.slice(0, -1).concat(lastValue).join('')
          setValue(joinValues)
        }
        break

      case value.length === 0:
        break

      case isNaN(Number(value[value.length - 1])) && value.length > 0:
        break

      case buttonValue === '.' && splitValues[splitValues.length - 1].includes('.'):
        break

      default:
        setValue(newValue)
    }
  }

  return { value, onClick, error }
}
