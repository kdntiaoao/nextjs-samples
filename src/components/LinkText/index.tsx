import Link, { LinkProps } from 'next/link'

type Props = LinkProps & {
  children: React.ReactNode
  external?: boolean
}

export const LinkText = ({ children, href, external = false }: Props) => {
  const targetAttribute = external ? '_blank' : undefined

  return (
    <Link href={href} target={targetAttribute} className="text-blue-500 underline">
      {children}
    </Link>
  )
}
