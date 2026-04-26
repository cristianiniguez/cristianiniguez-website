import { IconType } from 'react-icons'
import {
  SiCss,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

type SkillLevel = 1 | 2 | 3 | 4 | 5

type Skill = {
  name: string
  icon: IconType
  level: SkillLevel
}

const skills: { [key: string]: Skill[] } = {
  languages: [
    { name: 'HTML', icon: SiHtml5, level: 5 },
    { name: 'CSS', icon: SiCss, level: 5 },
    { name: 'JavaScript', icon: SiJavascript, level: 5 },
    { name: 'TypeScript', icon: SiTypescript, level: 5 },
    { name: 'Sass', icon: SiSass, level: 5 },
    { name: 'Python', icon: SiPython, level: 3 }
  ],
  frameworks: [
    { name: 'React', icon: SiReact, level: 5 },
    { name: 'Next JS', icon: SiNextdotjs, level: 5 },
    { name: 'Tailwind', icon: SiTailwindcss, level: 4 },
    { name: 'Express / Node', icon: SiNodedotjs, level: 4 }
  ],
  databases: [
    { name: 'PostgreSQL', icon: SiPostgresql, level: 4 },
    { name: 'MySQL', icon: SiMysql, level: 4 },
    { name: 'MongoDB', icon: SiMongodb, level: 3 },
    { name: 'Firebase', icon: SiFirebase, level: 2 }
  ],
  others: [
    { name: 'Git / GitHub', icon: SiGit, level: 5 },
    { name: 'Figma', icon: SiFigma, level: 4 },
    { name: 'Docker', icon: SiDocker, level: 3 }
  ]
}

const Dots = ({ level }: { level: SkillLevel }) => (
  <span className='level'>
    {[1, 2, 3, 4, 5].map(n => (
      <i key={n} className={n <= level ? 'on' : ''} />
    ))}
  </span>
)

const Skill = ({ icon: Icon, name, level }: Skill) => (
  <div className='skill'>
    <span className='name'>
      <Icon className='glyph' />
      {name}
    </span>
    <Dots level={level} />
  </div>
)

const Skills = () => {
  const renderSkillsList = (skills: Skill[]) => (
    <div className='skill-list'>
      {skills.map(skill => (
        <Skill key={skill.name} icon={skill.icon} name={skill.name} level={skill.level} />
      ))}
    </div>
  )

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
            {renderSkillsList(skills.languages)}
          </div>

          <div className='skill-cat'>
            <h4>Frameworks</h4>
            {renderSkillsList(skills.frameworks)}
          </div>

          <div className='skill-cat'>
            <h4>Bases de datos</h4>
            {renderSkillsList(skills.databases)}
          </div>

          <div className='skill-cat'>
            <h4>Herramientas</h4>
            {renderSkillsList(skills.others)}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
