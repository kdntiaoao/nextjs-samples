import { LinkText } from '@/components/LinkText'
import { PageWrapper } from '@/components/PageWrapper'

type LinkItem = {
  href: string
  label: string
  external?: boolean
}

const links: LinkItem[] = [
  {
    href: 'https://nextjs.org/docs',
    label: 'Next.js Documentation',
    external: true,
  },
  {
    href: 'https://nextjs.org/learn',
    label: 'Learn Next.js',
    external: true,
  },
  {
    href: '/samples/sample01',
    label: 'Sample01',
  },
]

export default function Home() {
  return (
    <PageWrapper title="Next.js Samples Project">
      <ul>
        {links.map(({ href, label, external }) => (
          <li key={href}>
            <LinkText href={href} external={external}>
              {label}
            </LinkText>
          </li>
        ))}
      </ul>
    </PageWrapper>
  )
}
