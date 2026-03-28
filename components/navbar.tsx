import Link from 'next/link'

const NavbarLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return <Link className='hover:text-accent' href={href}>{children}</Link>
}

const Navbar = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-8'>
        <li>
          <NavbarLink href='#'>Home</NavbarLink>
        </li>
        <li>
          <NavbarLink href='#skills'>Skill</NavbarLink>
        </li>
        <li>
          <NavbarLink href='#projects'>Projects</NavbarLink>
        </li>
        <li>
          <NavbarLink href='#contact'>Contact</NavbarLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
