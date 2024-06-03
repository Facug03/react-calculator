import { colors, bgColors, grid } from '../consts/styles'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  onClick: (value: string) => void
  color?: keyof typeof colors
  bgColor?: keyof typeof bgColors
  gridVariant?: keyof typeof grid
}

export function Button({ children, onClick, bgColor, color, gridVariant }: Props) {
  return (
    <button
      className={`inline-flex h-16 w-full items-center justify-center rounded-full text-lg font-semibold transition-all active:text-base ${
        bgColor && bgColors[bgColor]
      } ${color && colors[color]} ${gridVariant && grid[gridVariant]}`}
      onClick={(e) => {
        e.preventDefault()
        onClick(children as string)
      }}
    >
      {children}
    </button>
  )
}
