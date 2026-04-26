const About = () => {
  return (
    <section className='about' id='about'>
      <div className='wrap'>
        <div className='sec-head'>
          <span className='index'>01 / Sobre mí</span>
          <h2>
            Construyo cosas que <em>funcionan</em>, son rápidas y se sienten bien al usarse.
          </h2>
          <p className='lede'>
            Pequeñas decisiones de diseño y código que, juntas, hacen una diferencia enorme.
          </p>
        </div>
        <div className='about-grid'>
          <div className='about-body'>
            <p>
              Soy un desarrollador web autodidacta, con varios años explorando la web desde el HTML
              estático hasta interfaces reactivas, APIs y bases de datos.
            </p>
            <p>
              Hoy trabajo en el cruce entre frontend y producto: escribo código limpio, pienso en el
              usuario antes que en el framework, y disfruto convertir ideas vagas en interfaces que
              la gente realmente quiere usar. Cuando no estoy frente al editor, estoy leyendo sobre
              tipografía, jugando ajedrez o aprendiendo algo nuevo.
            </p>
          </div>
          <div className='about-stats'>
            <div className='stat'>
              <div className='num'>5<em>+</em></div>
              <div className='lbl'>Años codeando</div>
            </div>
            <div className='stat'>
              <div className='num'>20<em>+</em></div>
              <div className='lbl'>Proyectos enviados</div>
            </div>
            <div className='stat'>
              <div className='num'>12</div>
              <div className='lbl'>Tecnologías activas</div>
            </div>
            <div className='stat'>
              <div className='num'>∞</div>
              <div className='lbl'>Tazas de café</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
