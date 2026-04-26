const jobs = [
  {
    id: 'hexacorp',
    place: 'Hexacorp',
    icon: 'hexacorp.svg',
    from: new Date(2021, 0),
    to: new Date(2021, 7)
  },
  {
    id: 'oktana',
    place: 'Oktana',
    icon: 'oktana.png',
    from: new Date(2021, 10)
  }
]

import Image from 'next/image'

const Journey = () => {
  const formatDate = (date: Date) => date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })

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
            {jobs.map(job => (
              <div key={job.id} className='tl-item'>
                {job.icon && (
                  <Image
                    src={`/images/jobs/${job.icon}`}
                    alt={job.place}
                    width={64}
                    height={64}
                    className='tl-icon'
                    style={{ width: '64px', height: '64px' }}
                  />
                )}
                <span className='tl-year'>
                  {formatDate(job.from)} {job.to ? `— ${formatDate(job.to)}` : '— Hoy'}
                </span>
                <h3 className='tl-title'>{job.place}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
