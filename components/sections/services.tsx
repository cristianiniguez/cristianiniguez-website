interface ServicesCardProps {
  title: React.ReactNode
  description: string
  features: string[]
}

const ServicesCard = ({ title, description, features }: ServicesCardProps) => (
  <div className='svc-card'>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {features.map((feature: string, idx: number) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  </div>
)

const Services = () => {
  const servicesData = [
    {
      title: <>Páginas, Sitios y <em>Aplicaciones Web</em></>,
      description: 'Soluciones web completas que reflejan tu marca, se adaptan a todos los dispositivos y alcanzan audiencias en múltiples idiomas.',
      features: ['Refleja tu marca', 'Muéstrate en todas partes', 'En diferentes idiomas']
    },
    {
      title: <>Aplicaciones de <em>escritorio</em></>,
      description: 'Software multiplataforma robusto que funciona en cualquier sistema operativo con bases de datos integradas y diseño intuitivo.',
      features: ['Software multiplataforma', 'Conexión a base de datos', 'Diseño amigable']
    },
    {
      title: <><em>APIs</em> development</>,
      description: 'Backends potentes con autenticación segura, integración con bases de datos y conexión fluida con tu frontend.',
      features: ['Autenticación', 'Conexión a base de datos', 'Integración con el Frontend']
    }
  ]

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
          {servicesData.map((service, idx) => (
            <ServicesCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
