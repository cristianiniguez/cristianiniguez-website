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
              felizpc1<em>@</em>gmail.com
            </div>
            <div className='loc'>Santa Cruz de la Sierra, Bolivia · UTC -4</div>
            <div className='socials'>
              <a href='https://api.whatsapp.com/send?phone=+59179890908' target='_blank'>
                <span>WhatsApp</span>
                <span>+591 798 90908 ↗</span>
              </a>
              <a href='mailto:felizpc1@gmail.com'>
                <span>Email</span>
                <span>felizpc1@gmail.com ↗</span>
              </a>
              <a href='https://www.linkedin.com/in/cristian-iniguez' target='_blank'>
                <span>LinkedIn</span>
                <span>/in/cristianiniguez ↗</span>
              </a>
              <a href='https://github.com/cristianiniguez' target='_blank'>
                <span>GitHub</span>
                <span>@cristianiniguez ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
