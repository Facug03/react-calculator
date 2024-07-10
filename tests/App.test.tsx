import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from '../src/App'

describe('App', () => {
  const renderComponent = () => {
    render(<App />)

    return {
      input: screen.getByRole('textbox'),
      sumButton: screen.getByRole('button', { name: /\+/i }),
      multiplyButton: screen.getByRole('button', { name: /\*/i }),
      getNumButton: (num: string) => screen.getByRole('button', { name: new RegExp(num, 'i') }),
      clearButton: screen.getByRole('button', { name: /C/i }),
      resultButton: screen.getByRole('button', { name: /=/i }),
      dotButton: screen.getByRole('button', { name: /\./i }),
      backSpaceButton: screen.getByRole('button', { name: /<-/i }),
    }
  }

  it('should render an input', () => {
    const { input } = renderComponent()

    expect(input).toBeInTheDocument()
  })

  it('should render what the user clicks in the input', async () => {
    const { input, sumButton, getNumButton } = renderComponent()

    const numButton = getNumButton('1')
    const user = userEvent.setup()
    await user.click(numButton)
    await user.click(sumButton)
    await user.click(numButton)

    expect(input).toHaveValue('1+1')
  })

  it('should render the result of the calculation', async () => {
    const { input, sumButton, getNumButton, resultButton } = renderComponent()

    const numButton = getNumButton('3')
    const user = userEvent.setup()
    await user.click(numButton)
    await user.click(sumButton)
    await user.click(numButton)
    await user.click(resultButton)

    expect(input).toHaveValue('6')
  })

  it('should clear the input when the C button is clicked and remove', async () => {
    const { input, clearButton, getNumButton } = renderComponent()

    const numButton = getNumButton('3')
    const user = userEvent.setup()
    await user.click(numButton)
    await user.click(clearButton)

    expect(input).toHaveValue('')
  })

  it('should remove the last character in the input when the <- button is clicked', async () => {
    const { input, backSpaceButton } = renderComponent()

    const numButton = screen.getByRole('button', { name: /9/i })
    const multiplyButton = screen.getByRole('button', { name: /\*/i })
    const user = userEvent.setup()
    await user.click(numButton)
    await user.click(multiplyButton)
    await user.click(backSpaceButton)

    expect(input).toHaveValue('9')
  })

  it('should not be able to have more than one operator in a row', async () => {
    const { input, sumButton, getNumButton } = renderComponent()

    const numButton = getNumButton('5')
    const user = userEvent.setup()
    await user.click(numButton)
    await user.click(sumButton)
    await user.click(sumButton)
    await user.click(numButton)

    expect(input).toHaveValue('5+5')
  })

  it('should be able to parse numbers correctly', async () => {
    const { input, getNumButton, dotButton } = renderComponent()

    const numButton = getNumButton('1')
    const user = userEvent.setup()
    await user.click(numButton)
    await user.click(numButton)
    await user.click(numButton)
    await user.click(numButton)

    expect(input).toHaveValue('1,111')

    await user.click(numButton)
    await user.click(numButton)

    expect(input).toHaveValue('111,111')

    await user.click(dotButton)
    await user.click(numButton)
    await user.click(numButton)

    expect(input).toHaveValue('111,111.11')
  })
})
