const Journey = () => {
  return (
    <section className='exp' id='exp'>
      <div className='wrap'>
        <div className='sec-head'>
          <span className='index'>03 / Experiencia</span>
          <h2>
            Una línea recta entre <em>aprender</em> y entregar.
          </h2>
          <p className='lede'>
            Resumen de las paradas más importantes desde que empecé a programar.
          </p>
        </div>
        <div className='timeline'>
          <div className='tl-grid'>

            <div className='tl-item'>
              <span className='tl-year'>2020 — Inicio</span>
              <h3 className='tl-title'>Primeras líneas</h3>
              <p className='tl-org'>Autodidacta · HTML, CSS, JS</p>
              <p className='tl-desc'>
                Empecé construyendo páginas estáticas, clones de UI y experimentos en CodePen para
                entender el navegador a fondo.
              </p>
            </div>

            <div className='tl-item'>
              <span className='tl-year'>2022</span>
              <h3 className='tl-title'>Frontend serio</h3>
              <p className='tl-org'>React · TypeScript · Tailwind</p>
              <p className='tl-desc'>
                Salté a SPAs reales, estado, ruteo y diseño basado en sistemas. Mis primeros
                clientes freelance.
              </p>
            </div>

            <div className='tl-item'>
              <span className='tl-year'>2024</span>
              <h3 className='tl-title'>Full-stack</h3>
              <p className='tl-org'>Node · PostgreSQL · Next.js</p>
              <p className='tl-desc'>
                Bases de datos, APIs, auth y deploy. Pasé de hacer interfaces a enviar productos
                completos.
              </p>
            </div>

            <div className='tl-item now'>
              <span className='tl-year'>2026 — Hoy</span>
              <h3 className='tl-title'>Producto &amp; oficio</h3>
              <p className='tl-org'>Freelance · Santa Cruz de la Sierra, BO</p>
              <p className='tl-desc'>
                Trabajo con startups y equipos pequeños construyendo interfaces que se sienten
                cuidadas, accesibles y rápidas.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
