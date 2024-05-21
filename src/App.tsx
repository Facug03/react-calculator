import { useCalculate } from './hooks/useCalculate'
import { Button } from './ui/Button'

function App() {
  const { formAction } = useCalculate()

  return (
    <main className='grid place-content-center w-full h-screen'>
      <form
        action={formAction}
        className='flex flex-col justify-center gap-10 border border-slate-950 h-[550px] py-2 px-5 bg-slate-950 rounded-xl max-w-80'
      >
        <div className='flex items-center h-14'>
          <input className='block bg-transparent outline-none cursor-default pointer-events-none text-white text-3xl w-full' />
          <span className='text-white text-3xl animate-blink'>|</span>
        </div>

        <hr />

        <section className='grid grid-cols-4 gap-1 items-baseline'>
          <Button bgColor='secondary' color='danger'>
            C
          </Button>
          <Button bgColor='secondary' color='secondary'>
            {'<-'}
          </Button>
          <Button bgColor='secondary' color='secondary'>
            /
          </Button>
          <Button bgColor='secondary' color='secondary'>
            *
          </Button>

          <Button bgColor='primary' color='primary'>
            7
          </Button>
          <Button bgColor='primary' color='primary'>
            8
          </Button>
          <Button bgColor='primary' color='primary'>
            9
          </Button>
          <Button bgColor='secondary' color='secondary'>
            -
          </Button>

          <Button bgColor='primary' color='primary'>
            4
          </Button>
          <Button bgColor='primary' color='primary'>
            5
          </Button>
          <Button bgColor='primary' color='primary'>
            6
          </Button>
          <Button bgColor='secondary' color='secondary'>
            +
          </Button>

          <Button bgColor='primary' color='primary'>
            1
          </Button>
          <Button bgColor='primary' color='primary'>
            2
          </Button>
          <Button bgColor='primary' color='primary'>
            3
          </Button>

          <Button gridVariant='variant-1' bgColor='primary' color='primary'>
            0
          </Button>
          <Button bgColor='primary' color='primary'>
            .
          </Button>
          <Button gridVariant='variant-2' bgColor='secondary' color='secondary'>
            =
          </Button>
        </section>
      </form>
    </main>
  )
}

export default App
