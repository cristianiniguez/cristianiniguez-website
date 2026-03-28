import Navbar from './navbar'
import Button from './base/button'

const Header = () => {
  return (
    <header className='px-4'>
      <div className='container mx-auto flex items-center justify-between h-16'>
        <div className='font-serif text-2xl font-bold'>
          CRISTIAN
          {' '}
          <span className='text-primary'>IÑIGUEZ</span>
        </div>

        <div className='flex items-center gap-8'>
          <Navbar />
          <Button type='primary'>Resume</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
