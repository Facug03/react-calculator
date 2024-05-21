import { useActionState } from 'react'

async function changeInput(previousState: string, formData: FormData) {
  console.log(previousState, formData)
  return previousState
}

export function useCalculate() {
  const [state, formAction] = useActionState(changeInput, '')

  console.log(state)

  return { state, formAction }
}
