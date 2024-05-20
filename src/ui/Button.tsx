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
      className={`inline-flex items-center justify-center bg-slate-500 w-full h-12 rounded-full text-white font-semibold ${
        bgColor && bgColors[bgColor]
      } ${color && colors[color]} ${gridVariant && grid[gridVariant]}`}
    >
      {children}
    </button>
  )
}
