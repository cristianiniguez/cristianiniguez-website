const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='wrap'>
        <div className='contact-inner'>
          <div>
            <span className='contact-label'>06 / Contáctame</span>
            <h2 className='contact-heading' style={{ marginTop: '16px' }}>
              ¿Tienes una <em>idea</em>
              <span className='amp'>?</span>
            </h2>
            <h2
              className='contact-heading'
              style={{ color: 'var(--slate)', fontSize: 'clamp(40px,6vw,80px)', marginTop: '8px' }}
            >
              Hablemos.
            </h2>
            <p className='contact-sub'>
              Cuéntame qué estás construyendo. Respondo correos en menos de 24 horas. Si encajamos,
              agendamos una llamada de 30 minutos sin compromiso.
            </p>
          </div>
          <div className='contact-card'>
            <div className='ix'>Canales directos</div>
            <div className='email'>
              hola<em>@</em>cristianiniguez.dev
            </div>
            <div className='loc'>Quito, Ecuador · UTC −5</div>
            <div className='socials'>
              <a href='https://github.com/cristianiniguez'>
                <span>GitHub</span>
                <span>@cristianiniguez ↗</span>
              </a>
              <a href='https://www.linkedin.com/in/cristian-iniguez'>
                <span>LinkedIn</span>
                <span>/in/cristianiniguez ↗</span>
              </a>
              <a href='#'>
                <span>X / Twitter</span>
                <span>@cristian_dev ↗</span>
              </a>
              <a href='mailto:hola@cristianiniguez.dev'>
                <span>Email</span>
                <span>Copiar dirección ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
