type SkillLevel = 1 | 2 | 3 | 4 | 5

const Dots = ({ level }: { level: SkillLevel }) => (
  <span className='level'>
    {[1, 2, 3, 4, 5].map(n => (
      <i key={n} className={n <= level ? 'on' : ''} />
    ))}
  </span>
)

const Skill = ({ glyph, name, level }: { glyph: string, name: string, level: SkillLevel }) => (
  <div className='skill'>
    <span className='name'>
      <span className='glyph'>{glyph}</span>
      {name}
    </span>
    <Dots level={level} />
  </div>
)

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className='wrap'>
        <div className='sec-head'>
          <span className='index'>02 / Skills</span>
          <h2>
            Las herramientas con las que <em>me muevo</em> a diario.
          </h2>
          <p className='lede'>
            Lenguajes, frameworks, bases de datos y todo lo que está alrededor.
          </p>
        </div>
        <div className='skills-grid'>

          <div className='skill-cat'>
            <h4>Lenguajes</h4>
            <div className='skill-list'>
              <Skill glyph='JS' name='JavaScript' level={5} />
              <Skill glyph='TS' name='TypeScript' level={4} />
              <Skill glyph='PY' name='Python' level={3} />
              <Skill glyph='JV' name='Java' level={3} />
              <Skill glyph='C#' name='C#' level={2} />
            </div>
          </div>

          <div className='skill-cat'>
            <h4>Frameworks</h4>
            <div className='skill-list'>
              <Skill glyph='RC' name='React' level={5} />
              <Skill glyph='NX' name='Next.js' level={4} />
              <Skill glyph='VU' name='Vue' level={3} />
              <Skill glyph='TW' name='Tailwind' level={5} />
              <Skill glyph='EX' name='Express / Node' level={4} />
            </div>
          </div>

          <div className='skill-cat'>
            <h4>Bases de datos</h4>
            <div className='skill-list'>
              <Skill glyph='PG' name='PostgreSQL' level={4} />
              <Skill glyph='MY' name='MySQL' level={3} />
              <Skill glyph='MO' name='MongoDB' level={3} />
              <Skill glyph='FB' name='Firebase' level={2} />
              <Skill glyph='SU' name='Supabase' level={3} />
            </div>
          </div>

          <div className='skill-cat'>
            <h4>Herramientas</h4>
            <div className='skill-list'>
              <Skill glyph='GT' name='Git / GitHub' level={5} />
              <Skill glyph='FG' name='Figma' level={4} />
              <Skill glyph='DK' name='Docker' level={3} />
              <Skill glyph='VC' name='Vercel' level={4} />
              <Skill glyph='LX' name='Linux' level={3} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
