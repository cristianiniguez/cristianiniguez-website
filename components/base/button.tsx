import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  type: 'primary' | 'outline'
}

const Button: React.FC<ButtonProps> = ({ children, className, type }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-bold'

  const typeClasses = {
    primary: 'bg-primary text-[#001e4a]',
    outline: 'border border-primary text-primary'
  }

  return (
    <button className={clsx(baseClasses, typeClasses[type], className)}>{children}</button>
  )
}

export default Button
