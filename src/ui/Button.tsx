import { colors, bgColors, grid } from '../consts/styles'

interface Props {
  children: React.ReactNode
  onClick: (value: string) => void
  color?: keyof typeof colors
  bgColor?: keyof typeof bgColors
  gridVariant?: keyof typeof grid
}

export function Button({ children, onClick, bgColor, color, gridVariant }: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center w-full h-16 rounded-full font-semibold text-lg active:text-base transition-all ${
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
