import Navbar from './navbar'

const Header = () => {
  return (
    <nav className='top'>
      <div className='wrap row'>
        <a className='logo' href='#'>
          <b>C</b>
          <i>I</i>
          <span className='dot'>●</span>
        </a>
        <Navbar />
      </div>
    </nav>
  )
}

export default Header
