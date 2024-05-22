import { useCalculate } from './hooks/useCalculate'
import { useToast } from './hooks/useToast'
import { Button } from './ui/Button'

function App() {
  const { value, onClick, error } = useCalculate()
  const ref = useToast(error)

  return (
    <main className='grid place-content-center w-full h-screen'>
      <form className='flex flex-col justify-center gap-10 border border-slate-950 outline outline-gray-400 outline-[0.5px] outline-offset-8 h-[550px] py-2 px-5 bg-slate-950 rounded-xl max-w-80 relative'>
        <div className='flex items-center h-20'>
          <input
            name='calculation'
            className='block bg-transparent outline-none cursor-default pointer-events-none text-white text-3xl w-full text-right'
            value={value}
            readOnly
          />
          <span className='text-white text-3xl animate-blink'>|</span>
        </div>

        <hr />

        <section className='grid grid-cols-4 gap-1 items-baseline'>
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

          <Button
            onClick={onClick}
            gridVariant='variant-1'
            bgColor='primary'
            color='primary'
          >
            0
          </Button>
          <Button onClick={onClick} bgColor='primary' color='primary'>
            .
          </Button>
          <Button
            onClick={onClick}
            gridVariant='variant-2'
            bgColor='secondary'
            color='secondary'
          >
            =
          </Button>
        </section>

        <div
          className='max-w-xs bg-gray-500 text-sm text-white rounded-3xl shadow-lg absolute bottom-10 translate-x-1/2 transition duration-300 ease-in-out pointer-events-none'
          style={{ opacity: 0 }}
          role='alert'
          ref={ref}
        >
          <div className='flex py-2 px-4'>Formato inválido.</div>
        </div>
      </form>
    </main>
  )
}

export default App
