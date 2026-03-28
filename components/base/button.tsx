import clsx from 'clsx'

type ButtonProps = {
  type: 'primary' | 'outline'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-bold'

  const typeClasses = {
    primary: 'bg-primary text-[#001e4a]',
    outline: 'border border-primary text-primary'
  }

  return (
    <button className={clsx(baseClasses, typeClasses[type])}>{children}</button>
  )
}

export default Button
