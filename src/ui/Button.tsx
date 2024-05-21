import { colors, bgColors, grid } from '../consts/styles'

interface Props {
  children: React.ReactNode
  color?: keyof typeof colors
  bgColor?: keyof typeof bgColors
  gridVariant?: keyof typeof grid
}

export function Button({ children, bgColor, color, gridVariant }: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center w-full h-16 rounded-full font-semibold text-lg ${
        bgColor && bgColors[bgColor]
      } ${color && colors[color]} ${gridVariant && grid[gridVariant]}`}
    >
      {children}
    </button>
  )
}
