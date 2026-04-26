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
    name: <>Tu Solucionario de <em>Matemáticas</em></>,
    desc: 'Cursos gratis de matemáticas para estudiantes escolares y universitarios',
    tags: ['React', 'Python'],
    href: 'https://tu-solucionario-de-matematicas.web.app'
  },
  {
    id: 'P/02',
    name: <>SaitoLab <em>Inventory</em></>,
    desc: 'Sistema de gestión de inventario',
    tags: ['Node.js', 'React', 'MongoDB'],
    href: 'https://github.com/cristianiniguez/saitolab-inventory'
  },
  {
    id: 'P/03',
    name: <>Platzi Web <em>Challenge</em></>,
    desc: 'Retos de la Escuela de Desarrollo Web de Platzi',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://cristianiniguez.github.io/platziwebchallenge'
  },
  {
    id: 'P/04',
    name: <>SaitoLab <em>Notes</em></>,
    desc: 'Aplicación de Notas en Markdown',
    tags: ['React', 'Next.js', 'TypeScript'],
    href: 'https://saitolab-notes.vercel.app'
  },
  {
    id: 'P/05',
    name: <>Tu Solucionario de <em>Programación</em></>,
    desc: 'Blogs de programación para todos',
    tags: ['React', 'Firebase'],
    href: 'https://tusolucionariodeprogramacion.web.app'
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
            <a key={p.id} className='proj' href={p.href} target='_blank'>
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
