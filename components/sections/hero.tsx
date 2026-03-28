import Image from 'next/image'
import Button from '../base/button'

const Hero = () => {
  return (
    <section className='px-4 py-8'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-16'>
        <div className='flex flex-col flex-1 items-center md:items-start gap-8 text-center md:text-start'>
          <Image
            className='size-48 rounded-xl border-2 border-primary shadow-2xl shadow-primary/50 md:hidden'
            src='/images/me.jpg'
            alt='Cristian Iñiguez'
            width={192}
            height={192}
          />

          <div className='font-serif font-bold text-4xl'>
            <h1>Cristian Iñiguez</h1>
            <p className='text-primary'>Web Developer</p>
          </div>

          <p className='md:text-xl'>Architecting digital experiences through precision code and intenional design. Specializing in high-performance web applications and scalable API architectures.</p>

          <div className='w-full flex flex-col items-stretch md:flex-row gap-4'>
            <Button type='primary'>VIEW PROJECTS</Button>
            <Button type='outline'>HIRE ME</Button>
          </div>
        </div>

        <Image
          className='size-96 rounded-xl border-2 border-primary shadow-2xl shadow-primary/50 hidden md:block'
          src='/images/me.jpg'
          alt='Cristian Iñiguez'
          width={1024}
          height={1024}
        />
      </div>
    </section>
  )
}

export default Hero
