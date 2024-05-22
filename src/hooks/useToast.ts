import { useEffect, useRef } from 'react'

export function useToast(error: number) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (error === 0) return

    const { current } = ref

    if (!current) return

    current.style.opacity = '1'
    const timeout = setTimeout(() => {
      current.style.opacity = '0'
    }, 1500)

    return () => clearTimeout(timeout)
  }, [error])

  return ref
}
