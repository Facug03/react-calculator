import { Button } from './ui/Button'

function App() {
  return (
    <main className='mx-auto w-full'>
      <input />

      <hr />

      <section className='grid grid-cols-4 gap-1 items-baseline max-w-56'>
        <Button>C</Button>
        <Button>{'<-'}</Button>
        <Button>/</Button>
        <Button>*</Button>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>-</Button>

        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>+</Button>

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>

        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
      </section>
    </main>
  )
}

export default App
