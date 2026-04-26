import Image from 'next/image'

const Hero = () => {
  return (
    <header className='hero'>
      <div className='hero-grid' />
      <div className='wrap' style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        <div className='hero-eyebrow'>
          <span>Portfolio · 2026 · v.04</span>
          <span className='available'>
            <i className='pulse' />
            Disponible para proyectos
          </span>
        </div>

        <h1 className='hero-title'>
          <span className='line'>Cristian</span>
          <span className='line'>
            <em>Iñiguez</em>
            <span className='amp'>,</span>
          </span>
          <span className='hero-subtitle'>
            <span className='hero-subtitle-rule' />
            diseñando &amp; construyendo la web desde Quito.
          </span>
        </h1>

        <div className='hero-meta'>
          <div className='portrait'>
            <Image
              src='/images/me.jpg'
              alt='Cristian Iñiguez'
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <span className='corner' />
            <span className='tag'>CI · 2026</span>
          </div>
          <div className='col'>
            <h6>Rol</h6>
            <p>
              <strong>Desarrollador Web</strong>
              <br />
              Full-stack, con foco en frontend e interfaces.
            </p>
          </div>
          <div className='col'>
            <h6>Stack base</h6>
            <p>JavaScript · TypeScript · React · Node · PostgreSQL · Tailwind</p>
          </div>
          <div className='col'>
            <h6>Ubicación</h6>
            <p>
              <strong>Quito, Ecuador</strong>
              <br />
              UTC -5 · Trabajo remoto a nivel global.
            </p>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Hero
