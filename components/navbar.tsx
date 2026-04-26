const Navbar = () => {
  return (
    <ul>
      <li><a href='#about'>Sobre mí</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#exp'>Experiencia</a></li>
      <li><a href='#projects'>Proyectos</a></li>
      <li><a href='#contact' className='cta'>Contáctame →</a></li>
      {/* <li className='lang'>
        <span className='active'>ES</span>
        <span>/</span>
        <span>EN</span>
      </li> */}
    </ul>
  )
}

export default Navbar
