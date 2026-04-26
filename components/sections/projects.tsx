type Project = {
  id: string
  name: React.ReactNode
  desc: string
  tags: string[]
  href: string
}

const PROJECTS: Project[] = [
  {
    id: 'P/01',
    name: <>Solucionario de <em>Matemáticas</em></>,
    desc: 'App educativa que resuelve y explica paso a paso ejercicios de álgebra y cálculo. Hecha para estudiantes de bachillerato.',
    tags: ['React', 'Python', 'Sympy'],
    href: '#'
  },
  {
    id: 'P/02',
    name: <>Web <em>Bookstore</em></>,
    desc: 'Tienda online de libros con carrito, checkout, panel admin y catálogo dinámico — full-stack en Next.js.',
    tags: ['Next.js', 'Postgres', 'Stripe'],
    href: '#'
  },
  {
    id: 'P/03',
    name: <>Plant Web <em>Catalog</em></>,
    desc: 'Catálogo de plantas ornamentales con filtros, fichas técnicas y galería. Diseño editorial centrado en imagen.',
    tags: ['HTML', 'CSS', 'JS'],
    href: '#'
  },
  {
    id: 'P/04',
    name: <>Calculadora <em>Fitness</em></>,
    desc: 'Calculadora de macros, IMC y rutinas. Interfaz limpia, totalmente responsive, sin trackers.',
    tags: ['React', 'Tailwind'],
    href: '#'
  },
  {
    id: 'P/05',
    name: <>Solucionario <em>Trigonometría</em></>,
    desc: 'Versión hermana del proyecto P/01 — enfocada en identidades, ecuaciones y triángulos.',
    tags: ['React', 'Python'],
    href: '#'
  }
]

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='wrap'>
        <div className='sec-head'>
          <span className='index'>05 / Proyectos</span>
          <h2>
            Algunas cosas que he <em>enviado</em> al mundo.
          </h2>
          <p className='lede'>Una selección — el resto vive en GitHub.</p>
        </div>
        <div className='proj-list'>
          {PROJECTS.map(p => (
            <a key={p.id} className='proj' href={p.href}>
              <span className='pn'>{p.id}</span>
              <span className='pname'>{p.name}</span>
              <span className='pdesc'>{p.desc}</span>
              <span className='ptags'>
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </span>
              <span className='parr'>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
