import Head from 'next/head'
import { PageHeading } from '../PageHeading'

type Props = {
  children: React.ReactNode
  title?: string
}

const defaultTitle = 'Next.js Samples Project'

export const PageWrapper = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
      </Head>

      <div className="p-4">
        {title && (
          <header className="mb-4">
            <PageHeading>{title}</PageHeading>
          </header>
        )}

        <main>{children}</main>
      </div>
    </>
  )
}
