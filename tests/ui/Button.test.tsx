import { render, screen } from '@testing-library/react'
import { Button } from '../../src/ui/Button'

describe('Button', () => {
  it('should render a button', () => {
    render(<Button onClick={() => {}}>Test</Button>)

    screen.getByRole('button')
  })

  it('should render a button with children', () => {
    const children = 'Test'
    render(<Button onClick={() => {}}>{children}</Button>)

    expect(screen.getByRole('button')).toHaveTextContent(children)
  })

  it('should execute the onClick function', () => {
    const onClick = vi.fn()

    render(<Button onClick={onClick}>Test</Button>)

    screen.getByRole('button').click()

    expect(onClick).toHaveBeenCalledOnce()
  })
})
