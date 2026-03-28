const Footer = () => {
  const copy = `© Cristian Iñiguez · ${new Date().getFullYear()}`

  return (
    <footer className='px-4'>
      <div className='container mx-auto grid items-center grid-cols-3 h-24'>
        <div className='font-serif text-2xl font-bold'>
          CRISTIAN
          {' '}
          <span className='text-primary'>IÑIGUEZ</span>
        </div>

        <div className='text-center'>{copy}</div>

        <div className='flex items-center justify-end gap-8'>
          <a href='https://www.facebook.com/cristian.iniguez.56884'>FACEBOOK</a>
          <a href='https://github.com/cristianiniguez'>GITHUB</a>
          <a href='https://www.linkedin.com/in/cristian-iniguez'>LINKEDIN</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
