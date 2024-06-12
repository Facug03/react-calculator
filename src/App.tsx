import { useCalculate } from './hooks/useCalculate'
import { useToast } from './hooks/useToast'
import { Button } from './ui/Button'

function App() {
  const { value, onClick, error } = useCalculate()
  const ref = useToast(error)

  return (
    <main className='grid h-dvh place-content-center'>
      <div className='relative flex h-[550px] max-w-80 flex-col justify-center gap-10 rounded-xl border border-slate-950 bg-slate-950 px-5 py-2 outline outline-[0.5px] outline-offset-8 outline-gray-400'>
        <div className='flex h-20 items-center'>
          <input
            name='calculation'
            className='pointer-events-none block w-full cursor-default bg-transparent text-right text-3xl text-white outline-none'
            value={value}
            readOnly
            type='text'
          />
          <span className='animate-blink text-3xl text-white'>|</span>
        </div>

        <hr />

        <section className='grid grid-cols-4 items-baseline gap-1'>
          <Button onClick={onClick} bgColor='secondary' color='danger'>
            C
          </Button>
          <Button onClick={onClick} bgColor='secondary' color='secondary'>
            {'<-'}
          </Button>
          <Button onClick={onClick} bgColor='secondary' color='secondary'>
            /
          </Button>
          <Button onClick={onClick} bgColor='secondary' color='secondary'>
            *
          </Button>

          <Button onClick={onClick} bgColor='primary' color='primary'>
            7
          </Button>
          <Button onClick={onClick} bgColor='primary' color='primary'>
            8
          </Button>
          <Button onClick={onClick} bgColor='primary' color='primary'>
            9
          </Button>
          <Button onClick={onClick} bgColor='secondary' color='secondary'>
            -
          </Button>

          <Button onClick={onClick} bgColor='primary' color='primary'>
            4
          </Button>
          <Button onClick={onClick} bgColor='primary' color='primary'>
            5
          </Button>
          <Button onClick={onClick} bgColor='primary' color='primary'>
            6
          </Button>
          <Button onClick={onClick} bgColor='secondary' color='secondary'>
            +
          </Button>

          <Button onClick={onClick} bgColor='primary' color='primary'>
            1
          </Button>
          <Button onClick={onClick} bgColor='primary' color='primary'>
            2
          </Button>
          <Button onClick={onClick} bgColor='primary' color='primary'>
            3
          </Button>

          <Button onClick={onClick} gridVariant='variant-1' bgColor='primary' color='primary'>
            0
          </Button>
          <Button onClick={onClick} bgColor='primary' color='primary'>
            .
          </Button>
          <Button onClick={onClick} gridVariant='variant-2' bgColor='secondary' color='secondary'>
            =
          </Button>
        </section>

        <div
          className='pointer-events-none absolute bottom-10 max-w-xs translate-x-1/2 rounded-3xl bg-gray-500 text-sm text-white shadow-lg transition duration-300 ease-in-out'
          style={{ opacity: 0 }}
          role='alert'
          ref={ref}
        >
          <div className='flex px-4 py-2'>Formato inválido.</div>
        </div>
      </div>
    </main>
  )
}

export default App
