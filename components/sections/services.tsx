const Services = () => {
  return (
    <section className='svc'>
      <div className='wrap'>
        <div className='sec-head'>
          <span className='index'>04 / Servicios</span>
          <h2>
            En qué puedo <em>ayudarte</em>.
          </h2>
          <p className='lede'>
            Tres formas de trabajar juntos, cada una con un alcance claro.
          </p>
        </div>
        <div className='svc-grid'>

          <div className='svc-card'>
            <div className='num'>
              <span>S/01</span>
              <span>Desde $</span>
            </div>
            <span className='arrow'>→</span>
            <h3>Sitios <em>web</em> a medida</h3>
            <p>
              Landing pages, portfolios y sitios institucionales con diseño propio, responsive y
              optimizados de fábrica.
            </p>
            <ul>
              <li>Diseño + desarrollo</li>
              <li>SEO básico incluido</li>
              <li>Deploy + dominio</li>
            </ul>
          </div>

          <div className='svc-card'>
            <div className='num'>
              <span>S/02</span>
              <span>Por proyecto</span>
            </div>
            <span className='arrow'>→</span>
            <h3>Aplicaciones <em>web</em></h3>
            <p>
              Productos con login, paneles, base de datos y lógica real. Construidos para crecer
              sin romperse.
            </p>
            <ul>
              <li>React / Next.js</li>
              <li>API + base de datos</li>
              <li>Auth + roles</li>
            </ul>
          </div>

          <div className='svc-card'>
            <div className='num'>
              <span>S/03</span>
              <span>Iguala mensual</span>
            </div>
            <span className='arrow'>→</span>
            <h3>Mantenimiento <em>continuo</em></h3>
            <p>
              Iteración semanal sobre tu producto: nuevas features, bug-fixes, performance y QA en
              producción.
            </p>
            <ul>
              <li>Soporte continuo</li>
              <li>Mejoras incrementales</li>
              <li>Reportes mensuales</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
